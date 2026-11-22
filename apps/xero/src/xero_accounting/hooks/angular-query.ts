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

export function getAccountsKey() {
  return ['Accounts'] as const
}

export function getBankTransactionsKey() {
  return ['BankTransactions'] as const
}

export function getBankTransfersKey() {
  return ['BankTransfers'] as const
}

export function getBatchPaymentsKey() {
  return ['BatchPayments'] as const
}

export function getBrandingThemesKey() {
  return ['BrandingThemes'] as const
}

export function getBudgetsKey() {
  return ['Budgets'] as const
}

export function getContactGroupsKey() {
  return ['ContactGroups'] as const
}

export function getContactsKey() {
  return ['Contacts'] as const
}

export function getCreditNotesKey() {
  return ['CreditNotes'] as const
}

export function getCurrenciesKey() {
  return ['Currencies'] as const
}

export function getExpenseClaimsKey() {
  return ['ExpenseClaims'] as const
}

export function getInvoiceRemindersKey() {
  return ['InvoiceReminders'] as const
}

export function getInvoicesKey() {
  return ['Invoices'] as const
}

export function getItemsKey() {
  return ['Items'] as const
}

export function getJournalsKey() {
  return ['Journals'] as const
}

export function getLinkedTransactionsKey() {
  return ['LinkedTransactions'] as const
}

export function getManualJournalsKey() {
  return ['ManualJournals'] as const
}

export function getOrganisationKey() {
  return ['Organisation'] as const
}

export function getOverpaymentsKey() {
  return ['Overpayments'] as const
}

export function getPaymentServicesKey() {
  return ['PaymentServices'] as const
}

export function getPaymentsKey() {
  return ['Payments'] as const
}

export function getPrepaymentsKey() {
  return ['Prepayments'] as const
}

export function getPurchaseOrdersKey() {
  return ['PurchaseOrders'] as const
}

export function getQuotesKey() {
  return ['Quotes'] as const
}

export function getReceiptsKey() {
  return ['Receipts'] as const
}

export function getRepeatingInvoicesKey() {
  return ['RepeatingInvoices'] as const
}

export function getReportsKey() {
  return ['Reports'] as const
}

export function getSetupKey() {
  return ['Setup'] as const
}

export function getTaxRatesKey() {
  return ['TaxRates'] as const
}

export function getTrackingCategoriesKey() {
  return ['TrackingCategories'] as const
}

export function getUsersKey() {
  return ['Users'] as const
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.Accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts', keyArgs] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutAccountsMutationKey() {
  return ['Accounts', '/Accounts', 'PUT'] as const
}

export function getPutAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$put>>>>>,
    TError,
    InferRequestType<typeof client.Accounts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Accounts.$put>) {
      return parseResponse(client.Accounts.$put(args, options))
    },
  })
}

export function injectPutAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$put>>>>>,
        TError,
        InferRequestType<typeof client.Accounts.$put>,
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
    const mutationDefaults = getPutAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsAccountIDQueryKey(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID', keyArgs] as const
}

export function getAccountsAccountIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDQueryKey>
  >({
    queryKey: getAccountsAccountIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Accounts[':AccountID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAccountIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountsAccountIDMutationKey() {
  return ['Accounts', '/Accounts/:AccountID', 'POST'] as const
}

export function getPostAccountsAccountIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Accounts)[':AccountID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Accounts)[':AccountID']['$post']>) {
      return parseResponse(client.Accounts[':AccountID'].$post(args, options))
    },
  })
}

export function injectPostAccountsAccountID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Accounts)[':AccountID']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAccountsAccountIDMutationKey() {
  return ['Accounts', '/Accounts/:AccountID', 'DELETE'] as const
}

export function getDeleteAccountsAccountIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']>) {
      return parseResponse(client.Accounts[':AccountID'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountsAccountID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAccountIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsAccountIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsQueryKey>
  >({
    queryKey: getAccountsAccountIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIDAttachmentsQueryKey>
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
      ...getAccountsAccountIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments/:AttachmentID', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getAccountsAccountIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIDAttachmentsAttachmentIDQueryKey>
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
      ...getAccountsAccountIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getAccountsAccountIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIDAttachmentsFileNameQueryKey>
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
      ...getAccountsAccountIDAttachmentsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAccountsAccountIDAttachmentsFileNameMutationKey() {
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', 'PUT'] as const
}

export function getPutAccountsAccountIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutAccountsAccountIDAttachmentsFileName<
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
                  (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutAccountsAccountIDAttachmentsFileNameMutationOptions<
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

export function getPostAccountsAccountIDAttachmentsFileNameMutationKey() {
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', 'POST'] as const
}

export function getPostAccountsAccountIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostAccountsAccountIDAttachmentsFileName<
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
                  (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostAccountsAccountIDAttachmentsFileNameMutationOptions<
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

export function getBatchPaymentsQueryKey(args: InferRequestType<typeof client.BatchPayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments', keyArgs] as const
}

export function getBatchPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BatchPayments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsQueryKey>
  >({
    queryKey: getBatchPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BatchPayments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBatchPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BatchPayments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBatchPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBatchPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutBatchPaymentsMutationKey() {
  return ['BatchPayments', '/BatchPayments', 'PUT'] as const
}

export function getPutBatchPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchPayments.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBatchPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchPayments.$put>) {
      return parseResponse(client.BatchPayments.$put(args, options))
    },
  })
}

export function injectPutBatchPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.BatchPayments.$put>,
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
    const mutationDefaults = getPutBatchPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBatchPaymentsMutationKey() {
  return ['BatchPayments', '/BatchPayments', 'POST'] as const
}

export function getPostBatchPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchPayments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchPayments.$post>) {
      return parseResponse(client.BatchPayments.$post(args, options))
    },
  })
}

export function injectPostBatchPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.BatchPayments.$post>,
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
    const mutationDefaults = getPostBatchPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBatchPaymentsBatchPaymentIDQueryKey(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID', keyArgs] as const
}

export function getBatchPaymentsBatchPaymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsBatchPaymentIDQueryKey>
  >({
    queryKey: getBatchPaymentsBatchPaymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BatchPayments[':BatchPaymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBatchPaymentsBatchPaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchPaymentsBatchPaymentIDQueryKey>
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
      ...getBatchPaymentsBatchPaymentIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBatchPaymentsBatchPaymentIDMutationKey() {
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID', 'POST'] as const
}

export function getPostBatchPaymentsBatchPaymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchPaymentsBatchPaymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>,
    ) {
      return parseResponse(client.BatchPayments[':BatchPaymentID'].$post(args, options))
    },
  })
}

export function injectPostBatchPaymentsBatchPaymentID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>,
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
    const mutationDefaults = getPostBatchPaymentsBatchPaymentIDMutationOptions<
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

export function getBatchPaymentsBatchPaymentIDHistoryQueryKey(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID/History', keyArgs] as const
}

export function getBatchPaymentsBatchPaymentIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsBatchPaymentIDHistoryQueryKey>
  >({
    queryKey: getBatchPaymentsBatchPaymentIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BatchPayments[':BatchPaymentID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBatchPaymentsBatchPaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchPaymentsBatchPaymentIDHistoryQueryKey>
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
      ...getBatchPaymentsBatchPaymentIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutBatchPaymentsBatchPaymentIDHistoryMutationKey() {
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID/History', 'PUT'] as const
}

export function getPutBatchPaymentsBatchPaymentIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBatchPaymentsBatchPaymentIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>,
    ) {
      return parseResponse(client.BatchPayments[':BatchPaymentID'].History.$put(args, options))
    },
  })
}

export function injectPutBatchPaymentsBatchPaymentIDHistory<
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
                ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>,
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
    const mutationDefaults = getPutBatchPaymentsBatchPaymentIDHistoryMutationOptions<
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

export function getBankTransactionsQueryKey(
  args: InferRequestType<typeof client.BankTransactions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions', keyArgs] as const
}

export function getBankTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BankTransactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsQueryKey>
  >({
    queryKey: getBankTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBankTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BankTransactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBankTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutBankTransactionsMutationKey() {
  return ['BankTransactions', '/BankTransactions', 'PUT'] as const
}

export function getPutBankTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.BankTransactions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BankTransactions.$put>) {
      return parseResponse(client.BankTransactions.$put(args, options))
    },
  })
}

export function injectPutBankTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.BankTransactions.$put>,
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
    const mutationDefaults = getPutBankTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBankTransactionsMutationKey() {
  return ['BankTransactions', '/BankTransactions', 'POST'] as const
}

export function getPostBankTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BankTransactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BankTransactions.$post>) {
      return parseResponse(client.BankTransactions.$post(args, options))
    },
  })
}

export function injectPostBankTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BankTransactions.$post>,
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
    const mutationDefaults = getPostBankTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBankTransactionsBankTransactionIDQueryKey(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDQueryKey>
  >({
    queryKey: getBankTransactionsBankTransactionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransactionsBankTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsBankTransactionIDQueryKey>
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
      ...getBankTransactionsBankTransactionIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBankTransactionsBankTransactionIDMutationKey() {
  return ['BankTransactions', '/BankTransactions/:BankTransactionID', 'POST'] as const
}

export function getPostBankTransactionsBankTransactionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransactionsBankTransactionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>,
    ) {
      return parseResponse(client.BankTransactions[':BankTransactionID'].$post(args, options))
    },
  })
}

export function injectPostBankTransactionsBankTransactionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>,
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
    const mutationDefaults = getPostBankTransactionsBankTransactionIDMutationOptions<
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

export function getBankTransactionsBankTransactionIDAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/Attachments', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsQueryKey>
  >({
    queryKey: getBankTransactionsBankTransactionIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransactionsBankTransactionIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsQueryKey>
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
      ...getBankTransactionsBankTransactionIDAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransactionsBankTransactionIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey>
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
      ...getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransactionsBankTransactionIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey>
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
      ...getBankTransactionsBankTransactionIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutBankTransactionsBankTransactionIDAttachmentsFileNameMutationKey() {
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function getPutBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransactionsBankTransactionIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutBankTransactionsBankTransactionIDAttachmentsFileName<
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
                  (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
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
      getPutBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
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

export function getPostBankTransactionsBankTransactionIDAttachmentsFileNameMutationKey() {
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    'POST',
  ] as const
}

export function getPostBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransactionsBankTransactionIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostBankTransactionsBankTransactionIDAttachmentsFileName<
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
                  (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
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
      getPostBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
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

export function getBankTransactionsBankTransactionIDHistoryQueryKey(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/History', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDHistoryQueryKey>
  >({
    queryKey: getBankTransactionsBankTransactionIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransactionsBankTransactionIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['History']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransactions)[':BankTransactionID']['History']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransactionsBankTransactionIDHistoryQueryKey>
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
      ...getBankTransactionsBankTransactionIDHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutBankTransactionsBankTransactionIDHistoryMutationKey() {
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/History', 'PUT'] as const
}

export function getPutBankTransactionsBankTransactionIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransactionsBankTransactionIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BankTransactions)[':BankTransactionID']['History']['$put']
      >,
    ) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].History.$put(args, options),
      )
    },
  })
}

export function injectPutBankTransactionsBankTransactionIDHistory<
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
                  (typeof client.BankTransactions)[':BankTransactionID']['History']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$put']>,
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
    const mutationDefaults = getPutBankTransactionsBankTransactionIDHistoryMutationOptions<
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

export function getBankTransfersQueryKey(args: InferRequestType<typeof client.BankTransfers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers', keyArgs] as const
}

export function getBankTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BankTransfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersQueryKey>
  >({
    queryKey: getBankTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBankTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BankTransfers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBankTransfersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutBankTransfersMutationKey() {
  return ['BankTransfers', '/BankTransfers', 'PUT'] as const
}

export function getPutBankTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.BankTransfers.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BankTransfers.$put>) {
      return parseResponse(client.BankTransfers.$put(args, options))
    },
  })
}

export function injectPutBankTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.BankTransfers.$put>,
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
    const mutationDefaults = getPutBankTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBankTransfersMutationKey() {
  return ['BankTransfers', '/BankTransfers', 'POST'] as const
}

export function getPostBankTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BankTransfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BankTransfers.$post>) {
      return parseResponse(client.BankTransfers.$post(args, options))
    },
  })
}

export function injectPostBankTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.BankTransfers.$post>,
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
    const mutationDefaults = getPostBankTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBankTransfersBankTransferIDQueryKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID', keyArgs] as const
}

export function getBankTransfersBankTransferIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDQueryKey>
  >({
    queryKey: getBankTransfersBankTransferIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransfersBankTransferID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersBankTransferIDQueryKey>
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
      ...getBankTransfersBankTransferIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBankTransfersBankTransferIDMutationKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID', 'POST'] as const
}

export function getPostBankTransfersBankTransferIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransfersBankTransferIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>,
    ) {
      return parseResponse(client.BankTransfers[':BankTransferID'].$post(args, options))
    },
  })
}

export function injectPostBankTransfersBankTransferID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>,
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
    const mutationDefaults = getPostBankTransfersBankTransferIDMutationOptions<
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

export function getBankTransfersBankTransferIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments', keyArgs] as const
}

export function getBankTransfersBankTransferIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsQueryKey>
  >({
    queryKey: getBankTransfersBankTransferIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransfersBankTransferIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersBankTransferIDAttachmentsQueryKey>
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
      ...getBankTransfersBankTransferIDAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'BankTransfers',
    '/BankTransfers/:BankTransferID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransfersBankTransferIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey>
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
      ...getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBankTransfersBankTransferIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', keyArgs] as const
}

export function getBankTransfersBankTransferIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getBankTransfersBankTransferIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransfersBankTransferIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersBankTransferIDAttachmentsFileNameQueryKey>
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
      ...getBankTransfersBankTransferIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutBankTransfersBankTransferIDAttachmentsFileNameMutationKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', 'PUT'] as const
}

export function getPutBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransfersBankTransferIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutBankTransfersBankTransferIDAttachmentsFileName<
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
                  (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
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

export function getPostBankTransfersBankTransferIDAttachmentsFileNameMutationKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', 'POST'] as const
}

export function getPostBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransfersBankTransferIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostBankTransfersBankTransferIDAttachmentsFileName<
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
                  (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
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

export function getBankTransfersBankTransferIDHistoryQueryKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/History', keyArgs] as const
}

export function getBankTransfersBankTransferIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDHistoryQueryKey>
  >({
    queryKey: getBankTransfersBankTransferIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBankTransfersBankTransferIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBankTransfersBankTransferIDHistoryQueryKey>
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
      ...getBankTransfersBankTransferIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutBankTransfersBankTransferIDHistoryMutationKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/History', 'PUT'] as const
}

export function getPutBankTransfersBankTransferIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBankTransfersBankTransferIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>,
    ) {
      return parseResponse(client.BankTransfers[':BankTransferID'].History.$put(args, options))
    },
  })
}

export function injectPutBankTransfersBankTransferIDHistory<
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
                ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>,
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
    const mutationDefaults = getPutBankTransfersBankTransferIDHistoryMutationOptions<
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

export function getBrandingThemesQueryKey(
  args: InferRequestType<typeof client.BrandingThemes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes', keyArgs] as const
}

export function getBrandingThemesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BrandingThemes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesQueryKey>
  >({
    queryKey: getBrandingThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BrandingThemes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBrandingThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BrandingThemes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingThemesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBrandingThemesBrandingThemeIDQueryKey(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID', keyArgs] as const
}

export function getBrandingThemesBrandingThemeIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesBrandingThemeIDQueryKey>
  >({
    queryKey: getBrandingThemesBrandingThemeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BrandingThemes[':BrandingThemeID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrandingThemesBrandingThemeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingThemesBrandingThemeIDQueryKey>
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
      ...getBrandingThemesBrandingThemeIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBrandingThemesBrandingThemeIDPaymentServicesQueryKey(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID/PaymentServices', keyArgs] as const
}

export function getBrandingThemesBrandingThemeIDPaymentServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesBrandingThemeIDPaymentServicesQueryKey>
  >({
    queryKey: getBrandingThemesBrandingThemeIDPaymentServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrandingThemesBrandingThemeIDPaymentServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingThemesBrandingThemeIDPaymentServicesQueryKey>
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
      ...getBrandingThemesBrandingThemeIDPaymentServicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostBrandingThemesBrandingThemeIDPaymentServicesMutationKey() {
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID/PaymentServices', 'POST'] as const
}

export function getPostBrandingThemesBrandingThemeIDPaymentServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBrandingThemesBrandingThemeIDPaymentServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
      >,
    ) {
      return parseResponse(
        client.BrandingThemes[':BrandingThemeID'].PaymentServices.$post(args, options),
      )
    },
  })
}

export function injectPostBrandingThemesBrandingThemeIDPaymentServices<
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
                  (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
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
    const mutationDefaults = getPostBrandingThemesBrandingThemeIDPaymentServicesMutationOptions<
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

export function getBudgetsQueryKey(args: InferRequestType<typeof client.Budgets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Budgets', '/Budgets', keyArgs] as const
}

export function getBudgetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Budgets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBudgetsQueryKey>
  >({
    queryKey: getBudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Budgets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Budgets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBudgetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBudgetsBudgetIDQueryKey(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Budgets', '/Budgets/:BudgetID', keyArgs] as const
}

export function getBudgetsBudgetIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIDQueryKey>
  >({
    queryKey: getBudgetsBudgetIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Budgets[':BudgetID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBudgetsBudgetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBudgetsBudgetIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getContactsQueryKey(args: InferRequestType<typeof client.Contacts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts', keyArgs] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Contacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutContactsMutationKey() {
  return ['Contacts', '/Contacts', 'PUT'] as const
}

export function getPutContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$put>>>>>,
    TError,
    InferRequestType<typeof client.Contacts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Contacts.$put>) {
      return parseResponse(client.Contacts.$put(args, options))
    },
  })
}

export function injectPutContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$put>>>>>,
        TError,
        InferRequestType<typeof client.Contacts.$put>,
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
    const mutationDefaults = getPutContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostContactsMutationKey() {
  return ['Contacts', '/Contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.Contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Contacts.$post>) {
      return parseResponse(client.Contacts.$post(args, options))
    },
  })
}

export function injectPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsContactNumberQueryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactNumber', keyArgs] as const
}

export function getContactsContactNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactNumberQueryKey>
  >({
    queryKey: getContactsContactNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactNumberQueryKey>
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
      ...getContactsContactNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getContactsContactIDQueryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID', keyArgs] as const
}

export function getContactsContactIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDQueryKey>
  >({
    queryKey: getContactsContactIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsContactIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostContactsContactIDMutationKey() {
  return ['Contacts', '/Contacts/:ContactID', 'POST'] as const
}

export function getPostContactsContactIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Contacts)[':ContactID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Contacts)[':ContactID']['$post']>) {
      return parseResponse(client.Contacts[':ContactID'].$post(args, options))
    },
  })
}

export function injectPostContactsContactID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Contacts)[':ContactID']['$post']>,
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
    const mutationDefaults = getPostContactsContactIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsContactIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments', keyArgs] as const
}

export function getContactsContactIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsQueryKey>
  >({
    queryKey: getContactsContactIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDAttachmentsQueryKey>
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
      ...getContactsContactIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getContactsContactIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments/:AttachmentID', keyArgs] as const
}

export function getContactsContactIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getContactsContactIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDAttachmentsAttachmentIDQueryKey>
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
      ...getContactsContactIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getContactsContactIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', keyArgs] as const
}

export function getContactsContactIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getContactsContactIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDAttachmentsFileNameQueryKey>
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
      ...getContactsContactIDAttachmentsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutContactsContactIDAttachmentsFileNameMutationKey() {
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', 'PUT'] as const
}

export function getPutContactsContactIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsContactIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutContactsContactIDAttachmentsFileName<
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
                  (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutContactsContactIDAttachmentsFileNameMutationOptions<
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

export function getPostContactsContactIDAttachmentsFileNameMutationKey() {
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', 'POST'] as const
}

export function getPostContactsContactIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostContactsContactIDAttachmentsFileName<
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
                  (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostContactsContactIDAttachmentsFileNameMutationOptions<
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

export function getContactsContactIDCISSettingsQueryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/CISSettings', keyArgs] as const
}

export function getContactsContactIDCISSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDCISSettingsQueryKey>
  >({
    queryKey: getContactsContactIDCISSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].CISSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactIDCISSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDCISSettingsQueryKey>
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
      ...getContactsContactIDCISSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getContactsContactIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/History', keyArgs] as const
}

export function getContactsContactIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDHistoryQueryKey>
  >({
    queryKey: getContactsContactIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Contacts[':ContactID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsContactIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIDHistoryQueryKey>
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
      ...getContactsContactIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutContactsContactIDHistoryMutationKey() {
  return ['Contacts', '/Contacts/:ContactID/History', 'PUT'] as const
}

export function getPutContactsContactIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsContactIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']>,
    ) {
      return parseResponse(client.Contacts[':ContactID'].History.$put(args, options))
    },
  })
}

export function injectPutContactsContactIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']>,
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
    const mutationDefaults = getPutContactsContactIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactGroupsQueryKey(args: InferRequestType<typeof client.ContactGroups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ContactGroups', '/ContactGroups', keyArgs] as const
}

export function getContactGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ContactGroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactGroupsQueryKey>
  >({
    queryKey: getContactGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ContactGroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ContactGroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutContactGroupsMutationKey() {
  return ['ContactGroups', '/ContactGroups', 'PUT'] as const
}

export function getPutContactGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.ContactGroups.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutContactGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ContactGroups.$put>) {
      return parseResponse(client.ContactGroups.$put(args, options))
    },
  })
}

export function injectPutContactGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ContactGroups.$put>,
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
    const mutationDefaults = getPutContactGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactGroupsContactGroupIDQueryKey(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ContactGroups', '/ContactGroups/:ContactGroupID', keyArgs] as const
}

export function getContactGroupsContactGroupIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactGroupsContactGroupIDQueryKey>
  >({
    queryKey: getContactGroupsContactGroupIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ContactGroups[':ContactGroupID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactGroupsContactGroupID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactGroupsContactGroupIDQueryKey>
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
      ...getContactGroupsContactGroupIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostContactGroupsContactGroupIDMutationKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID', 'POST'] as const
}

export function getPostContactGroupsContactGroupIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactGroupsContactGroupIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>,
    ) {
      return parseResponse(client.ContactGroups[':ContactGroupID'].$post(args, options))
    },
  })
}

export function injectPostContactGroupsContactGroupID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>,
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
    const mutationDefaults = getPostContactGroupsContactGroupIDMutationOptions<
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

export function getPutContactGroupsContactGroupIDContactsMutationKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts', 'PUT'] as const
}

export function getPutContactGroupsContactGroupIDContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactGroupsContactGroupIDContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>,
    ) {
      return parseResponse(client.ContactGroups[':ContactGroupID'].Contacts.$put(args, options))
    },
  })
}

export function injectPutContactGroupsContactGroupIDContacts<
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
                ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>,
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
    const mutationDefaults = getPutContactGroupsContactGroupIDContactsMutationOptions<
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

export function getDeleteContactGroupsContactGroupIDContactsMutationKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts', 'DELETE'] as const
}

export function getDeleteContactGroupsContactGroupIDContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactGroupsContactGroupIDContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']
      >,
    ) {
      return parseResponse(client.ContactGroups[':ContactGroupID'].Contacts.$delete(args, options))
    },
  })
}

export function injectDeleteContactGroupsContactGroupIDContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']>,
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
    const mutationDefaults = getDeleteContactGroupsContactGroupIDContactsMutationOptions<
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

export function getDeleteContactGroupsContactGroupIDContactsContactIDMutationKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts/:ContactID', 'DELETE'] as const
}

export function getDeleteContactGroupsContactGroupIDContactsContactIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactGroupsContactGroupIDContactsContactIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
      >,
    ) {
      return parseResponse(
        client.ContactGroups[':ContactGroupID'].Contacts[':ContactID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteContactGroupsContactGroupIDContactsContactID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
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
    const mutationDefaults = getDeleteContactGroupsContactGroupIDContactsContactIDMutationOptions<
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

export function getCreditNotesQueryKey(args: InferRequestType<typeof client.CreditNotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes', keyArgs] as const
}

export function getCreditNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.CreditNotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditNotesQueryKey>
  >({
    queryKey: getCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.CreditNotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreditNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutCreditNotesMutationKey() {
  return ['CreditNotes', '/CreditNotes', 'PUT'] as const
}

export function getPutCreditNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$put>>>>>,
    TError,
    InferRequestType<typeof client.CreditNotes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreditNotes.$put>) {
      return parseResponse(client.CreditNotes.$put(args, options))
    },
  })
}

export function injectPutCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.CreditNotes.$put>,
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
    const mutationDefaults = getPutCreditNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreditNotesMutationKey() {
  return ['CreditNotes', '/CreditNotes', 'POST'] as const
}

export function getPostCreditNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$post>>>>>,
    TError,
    InferRequestType<typeof client.CreditNotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreditNotes.$post>) {
      return parseResponse(client.CreditNotes.$post(args, options))
    },
  })
}

export function injectPostCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreditNotes.$post>,
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
    const mutationDefaults = getPostCreditNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreditNotesCreditNoteIDQueryKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID', keyArgs] as const
}

export function getCreditNotesCreditNoteIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDQueryKey>
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
      ...getCreditNotesCreditNoteIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCreditNotesCreditNoteIDMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID', 'POST'] as const
}

export function getPostCreditNotesCreditNoteIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesCreditNoteIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>,
    ) {
      return parseResponse(client.CreditNotes[':CreditNoteID'].$post(args, options))
    },
  })
}

export function injectPostCreditNotesCreditNoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>,
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
    const mutationDefaults = getPostCreditNotesCreditNoteIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreditNotesCreditNoteIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsQueryKey>
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
      ...getCreditNotesCreditNoteIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey>
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
      ...getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey>
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
      ...getCreditNotesCreditNoteIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutCreditNotesCreditNoteIDAttachmentsFileNameMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', 'PUT'] as const
}

export function getPutCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesCreditNoteIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutCreditNotesCreditNoteIDAttachmentsFileName<
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
                  (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
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

export function getPostCreditNotesCreditNoteIDAttachmentsFileNameMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', 'POST'] as const
}

export function getPostCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesCreditNoteIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostCreditNotesCreditNoteIDAttachmentsFileName<
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
                  (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
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

export function getCreditNotesCreditNoteIDPdfQueryKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/pdf', keyArgs] as const
}

export function getCreditNotesCreditNoteIDPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDPdfQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDPdfQueryKey>
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
      ...getCreditNotesCreditNoteIDPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutCreditNotesCreditNoteIDAllocationsMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Allocations', 'PUT'] as const
}

export function getPutCreditNotesCreditNoteIDAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesCreditNoteIDAllocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>,
    ) {
      return parseResponse(client.CreditNotes[':CreditNoteID'].Allocations.$put(args, options))
    },
  })
}

export function injectPutCreditNotesCreditNoteIDAllocations<
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
                ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>,
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
    const mutationDefaults = getPutCreditNotesCreditNoteIDAllocationsMutationOptions<
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

export function getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Allocations/:AllocationID', 'DELETE'] as const
}

export function getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
      >,
    ) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Allocations[':AllocationID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCreditNotesCreditNoteIDAllocationsAllocationID<
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
                  (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
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
    const mutationDefaults = getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDMutationOptions<
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

export function getCreditNotesCreditNoteIDHistoryQueryKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/History', keyArgs] as const
}

export function getCreditNotesCreditNoteIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDHistoryQueryKey>
  >({
    queryKey: getCreditNotesCreditNoteIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreditNotesCreditNoteIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreditNotesCreditNoteIDHistoryQueryKey>
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
      ...getCreditNotesCreditNoteIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutCreditNotesCreditNoteIDHistoryMutationKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/History', 'PUT'] as const
}

export function getPutCreditNotesCreditNoteIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesCreditNoteIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>,
    ) {
      return parseResponse(client.CreditNotes[':CreditNoteID'].History.$put(args, options))
    },
  })
}

export function injectPutCreditNotesCreditNoteIDHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>,
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
    const mutationDefaults = getPutCreditNotesCreditNoteIDHistoryMutationOptions<
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

export function getCurrenciesQueryKey(args: InferRequestType<typeof client.Currencies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Currencies', '/Currencies', keyArgs] as const
}

export function getCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Currencies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCurrenciesQueryKey>
  >({
    queryKey: getCurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Currencies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Currencies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCurrenciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutCurrenciesMutationKey() {
  return ['Currencies', '/Currencies', 'PUT'] as const
}

export function getPutCurrenciesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$put>>>>>,
    TError,
    InferRequestType<typeof client.Currencies.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCurrenciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Currencies.$put>) {
      return parseResponse(client.Currencies.$put(args, options))
    },
  })
}

export function injectPutCurrencies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.Currencies.$put>,
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
    const mutationDefaults = getPutCurrenciesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExpenseClaimsQueryKey(args: InferRequestType<typeof client.ExpenseClaims.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims', keyArgs] as const
}

export function getExpenseClaimsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ExpenseClaims.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsQueryKey>
  >({
    queryKey: getExpenseClaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ExpenseClaims.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExpenseClaims<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ExpenseClaims.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExpenseClaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExpenseClaimsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutExpenseClaimsMutationKey() {
  return ['ExpenseClaims', '/ExpenseClaims', 'PUT'] as const
}

export function getPutExpenseClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.ExpenseClaims.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutExpenseClaimsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ExpenseClaims.$put>) {
      return parseResponse(client.ExpenseClaims.$put(args, options))
    },
  })
}

export function injectPutExpenseClaims<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ExpenseClaims.$put>,
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
    const mutationDefaults = getPutExpenseClaimsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExpenseClaimsExpenseClaimIDQueryKey(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID', keyArgs] as const
}

export function getExpenseClaimsExpenseClaimIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsExpenseClaimIDQueryKey>
  >({
    queryKey: getExpenseClaimsExpenseClaimIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ExpenseClaims[':ExpenseClaimID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExpenseClaimsExpenseClaimID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExpenseClaimsExpenseClaimIDQueryKey>
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
      ...getExpenseClaimsExpenseClaimIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostExpenseClaimsExpenseClaimIDMutationKey() {
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID', 'POST'] as const
}

export function getPostExpenseClaimsExpenseClaimIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExpenseClaimsExpenseClaimIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>,
    ) {
      return parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$post(args, options))
    },
  })
}

export function injectPostExpenseClaimsExpenseClaimID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>,
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
    const mutationDefaults = getPostExpenseClaimsExpenseClaimIDMutationOptions<
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

export function getExpenseClaimsExpenseClaimIDHistoryQueryKey(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID/History', keyArgs] as const
}

export function getExpenseClaimsExpenseClaimIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsExpenseClaimIDHistoryQueryKey>
  >({
    queryKey: getExpenseClaimsExpenseClaimIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ExpenseClaims[':ExpenseClaimID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExpenseClaimsExpenseClaimIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExpenseClaimsExpenseClaimIDHistoryQueryKey>
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
      ...getExpenseClaimsExpenseClaimIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutExpenseClaimsExpenseClaimIDHistoryMutationKey() {
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID/History', 'PUT'] as const
}

export function getPutExpenseClaimsExpenseClaimIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExpenseClaimsExpenseClaimIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>,
    ) {
      return parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$put(args, options))
    },
  })
}

export function injectPutExpenseClaimsExpenseClaimIDHistory<
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
                ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>,
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
    const mutationDefaults = getPutExpenseClaimsExpenseClaimIDHistoryMutationOptions<
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

export function getInvoicesQueryKey(args: InferRequestType<typeof client.Invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices', keyArgs] as const
}

export function getInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >({
    queryKey: getInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutInvoicesMutationKey() {
  return ['Invoices', '/Invoices', 'PUT'] as const
}

export function getPutInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$put>>>>>,
    TError,
    InferRequestType<typeof client.Invoices.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Invoices.$put>) {
      return parseResponse(client.Invoices.$put(args, options))
    },
  })
}

export function injectPutInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$put>>>>>,
        TError,
        InferRequestType<typeof client.Invoices.$put>,
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
    const mutationDefaults = getPutInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInvoicesMutationKey() {
  return ['Invoices', '/Invoices', 'POST'] as const
}

export function getPostInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.Invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Invoices.$post>) {
      return parseResponse(client.Invoices.$post(args, options))
    },
  })
}

export function injectPostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Invoices.$post>,
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
    const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDQueryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID', keyArgs] as const
}

export function getInvoicesInvoiceIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesInvoiceIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostInvoicesInvoiceIDMutationKey() {
  return ['Invoices', '/Invoices/:InvoiceID', 'POST'] as const
}

export function getPostInvoicesInvoiceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesInvoiceIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']>) {
      return parseResponse(client.Invoices[':InvoiceID'].$post(args, options))
    },
  })
}

export function injectPostInvoicesInvoiceID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']>,
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
    const mutationDefaults = getPostInvoicesInvoiceIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDPdfQueryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/pdf', keyArgs] as const
}

export function getInvoicesInvoiceIDPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDPdfQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDPdfQueryKey>
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
      ...getInvoicesInvoiceIDPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDAttachmentsQueryKey>
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
      ...getInvoicesInvoiceIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:AttachmentID', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey>
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
      ...getInvoicesInvoiceIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDAttachmentsFileNameQueryKey>
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
      ...getInvoicesInvoiceIDAttachmentsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutInvoicesInvoiceIDAttachmentsFileNameMutationKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', 'PUT'] as const
}

export function getPutInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesInvoiceIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutInvoicesInvoiceIDAttachmentsFileName<
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
                  (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getPostInvoicesInvoiceIDAttachmentsFileNameMutationKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', 'POST'] as const
}

export function getPostInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesInvoiceIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostInvoicesInvoiceIDAttachmentsFileName<
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
                  (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getInvoicesInvoiceIDOnlineInvoiceQueryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/OnlineInvoice', keyArgs] as const
}

export function getInvoicesInvoiceIDOnlineInvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDOnlineInvoiceQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDOnlineInvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].OnlineInvoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDOnlineInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDOnlineInvoiceQueryKey>
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
      ...getInvoicesInvoiceIDOnlineInvoiceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostInvoicesInvoiceIDEmailMutationKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Email', 'POST'] as const
}

export function getPostInvoicesInvoiceIDEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesInvoiceIDEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>,
    ) {
      return parseResponse(client.Invoices[':InvoiceID'].Email.$post(args, options))
    },
  })
}

export function injectPostInvoicesInvoiceIDEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>,
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
    const mutationDefaults = getPostInvoicesInvoiceIDEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInvoicesInvoiceIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/History', keyArgs] as const
}

export function getInvoicesInvoiceIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDHistoryQueryKey>
  >({
    queryKey: getInvoicesInvoiceIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Invoices[':InvoiceID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoicesInvoiceIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesInvoiceIDHistoryQueryKey>
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
      ...getInvoicesInvoiceIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutInvoicesInvoiceIDHistoryMutationKey() {
  return ['Invoices', '/Invoices/:InvoiceID/History', 'PUT'] as const
}

export function getPutInvoicesInvoiceIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesInvoiceIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>,
    ) {
      return parseResponse(client.Invoices[':InvoiceID'].History.$put(args, options))
    },
  })
}

export function injectPutInvoicesInvoiceIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>,
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
    const mutationDefaults = getPutInvoicesInvoiceIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInvoiceRemindersSettingsQueryKey(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['InvoiceReminders', '/InvoiceReminders/Settings', keyArgs] as const
}

export function getInvoiceRemindersSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoiceRemindersSettingsQueryKey>
  >({
    queryKey: getInvoiceRemindersSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.InvoiceReminders.Settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInvoiceRemindersSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoiceRemindersSettingsQueryKey>
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
      ...getInvoiceRemindersSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getItemsQueryKey(args: InferRequestType<typeof client.Items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items', keyArgs] as const
}

export function getItemsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >({
    queryKey: getItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutItemsMutationKey() {
  return ['Items', '/Items', 'PUT'] as const
}

export function getPutItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$put>>>>>,
    TError,
    InferRequestType<typeof client.Items.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.$put>) {
      return parseResponse(client.Items.$put(args, options))
    },
  })
}

export function injectPutItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$put>>>>>,
        TError,
        InferRequestType<typeof client.Items.$put>,
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
    const mutationDefaults = getPutItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostItemsMutationKey() {
  return ['Items', '/Items', 'POST'] as const
}

export function getPostItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$post>>>>>,
    TError,
    InferRequestType<typeof client.Items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.$post>) {
      return parseResponse(client.Items.$post(args, options))
    },
  })
}

export function injectPostItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$post>>>>>,
        TError,
        InferRequestType<typeof client.Items.$post>,
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
    const mutationDefaults = getPostItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsItemIDQueryKey(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items/:ItemID', keyArgs] as const
}

export function getItemsItemIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIDQueryKey>
  >({
    queryKey: getItemsItemIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':ItemID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectItemsItemID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsItemIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostItemsItemIDMutationKey() {
  return ['Items', '/Items/:ItemID', 'POST'] as const
}

export function getPostItemsItemIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Items)[':ItemID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':ItemID']['$post']>) {
      return parseResponse(client.Items[':ItemID'].$post(args, options))
    },
  })
}

export function injectPostItemsItemID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Items)[':ItemID']['$post']>,
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
    const mutationDefaults = getPostItemsItemIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteItemsItemIDMutationKey() {
  return ['Items', '/Items/:ItemID', 'DELETE'] as const
}

export function getDeleteItemsItemIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':ItemID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsItemIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':ItemID']['$delete']>) {
      return parseResponse(client.Items[':ItemID'].$delete(args, options))
    },
  })
}

export function injectDeleteItemsItemID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Items)[':ItemID']['$delete']>,
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
    const mutationDefaults = getDeleteItemsItemIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsItemIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items/:ItemID/History', keyArgs] as const
}

export function getItemsItemIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIDHistoryQueryKey>
  >({
    queryKey: getItemsItemIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':ItemID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectItemsItemIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsItemIDHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIDHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutItemsItemIDHistoryMutationKey() {
  return ['Items', '/Items/:ItemID/History', 'PUT'] as const
}

export function getPutItemsItemIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItemsItemIDHistoryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']>) {
      return parseResponse(client.Items[':ItemID'].History.$put(args, options))
    },
  })
}

export function injectPutItemsItemIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']>,
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
    const mutationDefaults = getPutItemsItemIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJournalsQueryKey(args: InferRequestType<typeof client.Journals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals', keyArgs] as const
}

export function getJournalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Journals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJournalsQueryKey>
  >({
    queryKey: getJournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Journals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJournals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Journals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJournalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJournalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJournalsJournalIDQueryKey(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals/:JournalID', keyArgs] as const
}

export function getJournalsJournalIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalsJournalIDQueryKey>
  >({
    queryKey: getJournalsJournalIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Journals[':JournalID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJournalsJournalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalsJournalIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJournalsJournalIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJournalsJournalNumberQueryKey(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals/:JournalNumber', keyArgs] as const
}

export function getJournalsJournalNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalsJournalNumberQueryKey>
  >({
    queryKey: getJournalsJournalNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Journals[':JournalNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJournalsJournalNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalsJournalNumberQueryKey>
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
      ...getJournalsJournalNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLinkedTransactionsQueryKey(
  args: InferRequestType<typeof client.LinkedTransactions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LinkedTransactions', '/LinkedTransactions', keyArgs] as const
}

export function getLinkedTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LinkedTransactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinkedTransactionsQueryKey>
  >({
    queryKey: getLinkedTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LinkedTransactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinkedTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LinkedTransactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinkedTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinkedTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutLinkedTransactionsMutationKey() {
  return ['LinkedTransactions', '/LinkedTransactions', 'PUT'] as const
}

export function getPutLinkedTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.LinkedTransactions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLinkedTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LinkedTransactions.$put>) {
      return parseResponse(client.LinkedTransactions.$put(args, options))
    },
  })
}

export function injectPutLinkedTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.LinkedTransactions.$put>,
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
    const mutationDefaults = getPutLinkedTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLinkedTransactionsLinkedTransactionIDQueryKey(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', keyArgs] as const
}

export function getLinkedTransactionsLinkedTransactionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinkedTransactionsLinkedTransactionIDQueryKey>
  >({
    queryKey: getLinkedTransactionsLinkedTransactionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LinkedTransactions[':LinkedTransactionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLinkedTransactionsLinkedTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinkedTransactionsLinkedTransactionIDQueryKey>
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
      ...getLinkedTransactionsLinkedTransactionIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostLinkedTransactionsLinkedTransactionIDMutationKey() {
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', 'POST'] as const
}

export function getPostLinkedTransactionsLinkedTransactionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkedTransactionsLinkedTransactionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>,
    ) {
      return parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$post(args, options))
    },
  })
}

export function injectPostLinkedTransactionsLinkedTransactionID<
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
                ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>,
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
    const mutationDefaults = getPostLinkedTransactionsLinkedTransactionIDMutationOptions<
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

export function getDeleteLinkedTransactionsLinkedTransactionIDMutationKey() {
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', 'DELETE'] as const
}

export function getDeleteLinkedTransactionsLinkedTransactionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinkedTransactionsLinkedTransactionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>,
    ) {
      return parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$delete(args, options))
    },
  })
}

export function injectDeleteLinkedTransactionsLinkedTransactionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>,
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
    const mutationDefaults = getDeleteLinkedTransactionsLinkedTransactionIDMutationOptions<
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

export function getManualJournalsQueryKey(
  args: InferRequestType<typeof client.ManualJournals.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals', keyArgs] as const
}

export function getManualJournalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ManualJournals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsQueryKey>
  >({
    queryKey: getManualJournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectManualJournals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ManualJournals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getManualJournalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutManualJournalsMutationKey() {
  return ['ManualJournals', '/ManualJournals', 'PUT'] as const
}

export function getPutManualJournalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.ManualJournals.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutManualJournalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ManualJournals.$put>) {
      return parseResponse(client.ManualJournals.$put(args, options))
    },
  })
}

export function injectPutManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ManualJournals.$put>,
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
    const mutationDefaults = getPutManualJournalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostManualJournalsMutationKey() {
  return ['ManualJournals', '/ManualJournals', 'POST'] as const
}

export function getPostManualJournalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ManualJournals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManualJournalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ManualJournals.$post>) {
      return parseResponse(client.ManualJournals.$post(args, options))
    },
  })
}

export function injectPostManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ManualJournals.$post>,
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
    const mutationDefaults = getPostManualJournalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getManualJournalsManualJournalIDQueryKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID', keyArgs] as const
}

export function getManualJournalsManualJournalIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDQueryKey>
  >({
    queryKey: getManualJournalsManualJournalIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectManualJournalsManualJournalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsManualJournalIDQueryKey>
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
      ...getManualJournalsManualJournalIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostManualJournalsManualJournalIDMutationKey() {
  return ['ManualJournals', '/ManualJournals/:ManualJournalID', 'POST'] as const
}

export function getPostManualJournalsManualJournalIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManualJournalsManualJournalIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>,
    ) {
      return parseResponse(client.ManualJournals[':ManualJournalID'].$post(args, options))
    },
  })
}

export function injectPostManualJournalsManualJournalID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>,
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
    const mutationDefaults = getPostManualJournalsManualJournalIDMutationOptions<
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

export function getManualJournalsManualJournalIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/Attachments', keyArgs] as const
}

export function getManualJournalsManualJournalIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsQueryKey>
  >({
    queryKey: getManualJournalsManualJournalIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectManualJournalsManualJournalIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsManualJournalIDAttachmentsQueryKey>
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
      ...getManualJournalsManualJournalIDAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectManualJournalsManualJournalIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey>
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
      ...getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getManualJournalsManualJournalIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getManualJournalsManualJournalIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getManualJournalsManualJournalIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectManualJournalsManualJournalIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsManualJournalIDAttachmentsFileNameQueryKey>
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
      ...getManualJournalsManualJournalIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutManualJournalsManualJournalIDAttachmentsFileNameMutationKey() {
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function getPutManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutManualJournalsManualJournalIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutManualJournalsManualJournalIDAttachmentsFileName<
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
                  (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
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

export function getPostManualJournalsManualJournalIDAttachmentsFileNameMutationKey() {
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    'POST',
  ] as const
}

export function getPostManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostManualJournalsManualJournalIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostManualJournalsManualJournalIDAttachmentsFileName<
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
                  (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
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

export function getManualJournalsManualJournalIDHistoryQueryKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/History', keyArgs] as const
}

export function getManualJournalsManualJournalIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDHistoryQueryKey>
  >({
    queryKey: getManualJournalsManualJournalIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectManualJournalsManualJournalIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['History']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManualJournalsManualJournalIDHistoryQueryKey>
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
      ...getManualJournalsManualJournalIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutManualJournalsManualJournalIDHistoryMutationKey() {
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/History', 'PUT'] as const
}

export function getPutManualJournalsManualJournalIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManualJournalsManualJournalIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>,
    ) {
      return parseResponse(client.ManualJournals[':ManualJournalID'].History.$put(args, options))
    },
  })
}

export function injectPutManualJournalsManualJournalIDHistory<
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
                ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>,
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
    const mutationDefaults = getPutManualJournalsManualJournalIDHistoryMutationOptions<
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

export function getOrganisationQueryKey(args: InferRequestType<typeof client.Organisation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation', keyArgs] as const
}

export function getOrganisationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Organisation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrganisationQueryKey>
  >({
    queryKey: getOrganisationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Organisation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganisation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Organisation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganisationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganisationActionsQueryKey(
  args: InferRequestType<typeof client.Organisation.Actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation/Actions', keyArgs] as const
}

export function getOrganisationActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Organisation.Actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationActionsQueryKey>
  >({
    queryKey: getOrganisationActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Organisation.Actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganisationActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Organisation.Actions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganisationActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganisationOrganisationIDCISSettingsQueryKey(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation/:OrganisationID/CISSettings', keyArgs] as const
}

export function getOrganisationOrganisationIDCISSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationOrganisationIDCISSettingsQueryKey>
  >({
    queryKey: getOrganisationOrganisationIDCISSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Organisation[':OrganisationID'].CISSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationOrganisationIDCISSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationOrganisationIDCISSettingsQueryKey>
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
      ...getOrganisationOrganisationIDCISSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOverpaymentsQueryKey(args: InferRequestType<typeof client.Overpayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments', keyArgs] as const
}

export function getOverpaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Overpayments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsQueryKey>
  >({
    queryKey: getOverpaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Overpayments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOverpayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Overpayments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOverpaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOverpaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOverpaymentsOverpaymentIDQueryKey(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments/:OverpaymentID', keyArgs] as const
}

export function getOverpaymentsOverpaymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsOverpaymentIDQueryKey>
  >({
    queryKey: getOverpaymentsOverpaymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Overpayments[':OverpaymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOverpaymentsOverpaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOverpaymentsOverpaymentIDQueryKey>
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
      ...getOverpaymentsOverpaymentIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOverpaymentsOverpaymentIDAllocationsMutationKey() {
  return ['Overpayments', '/Overpayments/:OverpaymentID/Allocations', 'PUT'] as const
}

export function getPutOverpaymentsOverpaymentIDAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOverpaymentsOverpaymentIDAllocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>,
    ) {
      return parseResponse(client.Overpayments[':OverpaymentID'].Allocations.$put(args, options))
    },
  })
}

export function injectPutOverpaymentsOverpaymentIDAllocations<
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
                ReturnType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>,
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
    const mutationDefaults = getPutOverpaymentsOverpaymentIDAllocationsMutationOptions<
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

export function getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDMutationKey() {
  return [
    'Overpayments',
    '/Overpayments/:OverpaymentID/Allocations/:AllocationID',
    'DELETE',
  ] as const
}

export function getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Overpayments[':OverpaymentID'].Allocations[':AllocationID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOverpaymentsOverpaymentIDAllocationsAllocationID<
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
                  (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
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
      getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDMutationOptions<
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

export function getOverpaymentsOverpaymentIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments/:OverpaymentID/History', keyArgs] as const
}

export function getOverpaymentsOverpaymentIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsOverpaymentIDHistoryQueryKey>
  >({
    queryKey: getOverpaymentsOverpaymentIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Overpayments[':OverpaymentID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOverpaymentsOverpaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOverpaymentsOverpaymentIDHistoryQueryKey>
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
      ...getOverpaymentsOverpaymentIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOverpaymentsOverpaymentIDHistoryMutationKey() {
  return ['Overpayments', '/Overpayments/:OverpaymentID/History', 'PUT'] as const
}

export function getPutOverpaymentsOverpaymentIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOverpaymentsOverpaymentIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>,
    ) {
      return parseResponse(client.Overpayments[':OverpaymentID'].History.$put(args, options))
    },
  })
}

export function injectPutOverpaymentsOverpaymentIDHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>,
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
    const mutationDefaults = getPutOverpaymentsOverpaymentIDHistoryMutationOptions<
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

export function getPaymentsQueryKey(args: InferRequestType<typeof client.Payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments', keyArgs] as const
}

export function getPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >({
    queryKey: getPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutPaymentsMutationKey() {
  return ['Payments', '/Payments', 'PUT'] as const
}

export function getPutPaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$put>>>>>,
    TError,
    InferRequestType<typeof client.Payments.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Payments.$put>) {
      return parseResponse(client.Payments.$put(args, options))
    },
  })
}

export function injectPutPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$put>>>>>,
        TError,
        InferRequestType<typeof client.Payments.$put>,
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
    const mutationDefaults = getPutPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentsMutationKey() {
  return ['Payments', '/Payments', 'POST'] as const
}

export function getPostPaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.Payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Payments.$post>) {
      return parseResponse(client.Payments.$post(args, options))
    },
  })
}

export function injectPostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Payments.$post>,
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
    const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentsPaymentIDQueryKey(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments/:PaymentID', keyArgs] as const
}

export function getPaymentsPaymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIDQueryKey>
  >({
    queryKey: getPaymentsPaymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payments[':PaymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsPaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsPaymentIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsPaymentIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPaymentsPaymentIDMutationKey() {
  return ['Payments', '/Payments/:PaymentID', 'POST'] as const
}

export function getPostPaymentsPaymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Payments)[':PaymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Payments)[':PaymentID']['$post']>) {
      return parseResponse(client.Payments[':PaymentID'].$post(args, options))
    },
  })
}

export function injectPostPaymentsPaymentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Payments)[':PaymentID']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentsPaymentIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments/:PaymentID/History', keyArgs] as const
}

export function getPaymentsPaymentIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIDHistoryQueryKey>
  >({
    queryKey: getPaymentsPaymentIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Payments[':PaymentID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsPaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsPaymentIDHistoryQueryKey>
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
      ...getPaymentsPaymentIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPaymentsPaymentIDHistoryMutationKey() {
  return ['Payments', '/Payments/:PaymentID/History', 'PUT'] as const
}

export function getPutPaymentsPaymentIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentsPaymentIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']>,
    ) {
      return parseResponse(client.Payments[':PaymentID'].History.$put(args, options))
    },
  })
}

export function injectPutPaymentsPaymentIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']>,
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
    const mutationDefaults = getPutPaymentsPaymentIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentServicesQueryKey(
  args: InferRequestType<typeof client.PaymentServices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PaymentServices', '/PaymentServices', keyArgs] as const
}

export function getPaymentServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PaymentServices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentServicesQueryKey>
  >({
    queryKey: getPaymentServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PaymentServices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPaymentServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PaymentServices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutPaymentServicesMutationKey() {
  return ['PaymentServices', '/PaymentServices', 'PUT'] as const
}

export function getPutPaymentServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.PaymentServices.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PaymentServices.$put>) {
      return parseResponse(client.PaymentServices.$put(args, options))
    },
  })
}

export function injectPutPaymentServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.PaymentServices.$put>,
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
    const mutationDefaults = getPutPaymentServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPrepaymentsQueryKey(args: InferRequestType<typeof client.Prepayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments', keyArgs] as const
}

export function getPrepaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Prepayments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsQueryKey>
  >({
    queryKey: getPrepaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Prepayments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPrepayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Prepayments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrepaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPrepaymentsPrepaymentIDQueryKey(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments/:PrepaymentID', keyArgs] as const
}

export function getPrepaymentsPrepaymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsPrepaymentIDQueryKey>
  >({
    queryKey: getPrepaymentsPrepaymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Prepayments[':PrepaymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPrepaymentsPrepaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaymentsPrepaymentIDQueryKey>
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
      ...getPrepaymentsPrepaymentIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPrepaymentsPrepaymentIDAllocationsMutationKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/Allocations', 'PUT'] as const
}

export function getPutPrepaymentsPrepaymentIDAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrepaymentsPrepaymentIDAllocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>,
    ) {
      return parseResponse(client.Prepayments[':PrepaymentID'].Allocations.$put(args, options))
    },
  })
}

export function injectPutPrepaymentsPrepaymentIDAllocations<
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
                ReturnType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>,
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
    const mutationDefaults = getPutPrepaymentsPrepaymentIDAllocationsMutationOptions<
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

export function getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDMutationKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/Allocations/:AllocationID', 'DELETE'] as const
}

export function getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Prepayments[':PrepaymentID'].Allocations[':AllocationID'].$delete(args, options),
      )
    },
  })
}

export function injectDeletePrepaymentsPrepaymentIDAllocationsAllocationID<
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
                  (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
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
    const mutationDefaults = getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDMutationOptions<
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

export function getPrepaymentsPrepaymentIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments/:PrepaymentID/History', keyArgs] as const
}

export function getPrepaymentsPrepaymentIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsPrepaymentIDHistoryQueryKey>
  >({
    queryKey: getPrepaymentsPrepaymentIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Prepayments[':PrepaymentID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPrepaymentsPrepaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaymentsPrepaymentIDHistoryQueryKey>
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
      ...getPrepaymentsPrepaymentIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPrepaymentsPrepaymentIDHistoryMutationKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/History', 'PUT'] as const
}

export function getPutPrepaymentsPrepaymentIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrepaymentsPrepaymentIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>,
    ) {
      return parseResponse(client.Prepayments[':PrepaymentID'].History.$put(args, options))
    },
  })
}

export function injectPutPrepaymentsPrepaymentIDHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>,
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
    const mutationDefaults = getPutPrepaymentsPrepaymentIDHistoryMutationOptions<
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

export function getPurchaseOrdersQueryKey(
  args: InferRequestType<typeof client.PurchaseOrders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders', keyArgs] as const
}

export function getPurchaseOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.PurchaseOrders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersQueryKey>
  >({
    queryKey: getPurchaseOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.PurchaseOrders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPurchaseOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutPurchaseOrdersMutationKey() {
  return ['PurchaseOrders', '/PurchaseOrders', 'PUT'] as const
}

export function getPutPurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.PurchaseOrders.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PurchaseOrders.$put>) {
      return parseResponse(client.PurchaseOrders.$put(args, options))
    },
  })
}

export function injectPutPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.PurchaseOrders.$put>,
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
    const mutationDefaults = getPutPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPurchaseOrdersMutationKey() {
  return ['PurchaseOrders', '/PurchaseOrders', 'POST'] as const
}

export function getPostPurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PurchaseOrders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PurchaseOrders.$post>) {
      return parseResponse(client.PurchaseOrders.$post(args, options))
    },
  })
}

export function injectPostPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.PurchaseOrders.$post>,
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
    const mutationDefaults = getPostPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPurchaseOrdersPurchaseOrderIDPdfQueryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/pdf', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDPdfQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDPdfQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseOrdersPurchaseOrderIDQueryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostPurchaseOrdersPurchaseOrderIDMutationKey() {
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID', 'POST'] as const
}

export function getPostPurchaseOrdersPurchaseOrderIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersPurchaseOrderIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>,
    ) {
      return parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$post(args, options))
    },
  })
}

export function injectPostPurchaseOrdersPurchaseOrderID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>,
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
    const mutationDefaults = getPostPurchaseOrdersPurchaseOrderIDMutationOptions<
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

export function getPurchaseOrdersPurchaseOrderNumberQueryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderNumber', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderNumberQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderNumberQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseOrdersPurchaseOrderIDHistoryQueryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/History', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDHistoryQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDHistoryQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPurchaseOrdersPurchaseOrderIDHistoryMutationKey() {
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/History', 'PUT'] as const
}

export function getPutPurchaseOrdersPurchaseOrderIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersPurchaseOrderIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>,
    ) {
      return parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$put(args, options))
    },
  })
}

export function injectPutPurchaseOrdersPurchaseOrderIDHistory<
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
                ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>,
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
    const mutationDefaults = getPutPurchaseOrdersPurchaseOrderIDHistoryMutationOptions<
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

export function getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/Attachments', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey>
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
      ...getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationKey() {
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
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
                  (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
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

export function getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationKey() {
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    'POST',
  ] as const
}

export function getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
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
                  (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
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

export function getQuotesQueryKey(args: InferRequestType<typeof client.Quotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes', keyArgs] as const
}

export function getQuotesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Quotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesQueryKey>
  >({
    queryKey: getQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Quotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutQuotesMutationKey() {
  return ['Quotes', '/Quotes', 'PUT'] as const
}

export function getPutQuotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$put>>>>>,
    TError,
    InferRequestType<typeof client.Quotes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Quotes.$put>) {
      return parseResponse(client.Quotes.$put(args, options))
    },
  })
}

export function injectPutQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$put>>>>>,
        TError,
        InferRequestType<typeof client.Quotes.$put>,
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
    const mutationDefaults = getPutQuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostQuotesMutationKey() {
  return ['Quotes', '/Quotes', 'POST'] as const
}

export function getPostQuotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$post>>>>>,
    TError,
    InferRequestType<typeof client.Quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Quotes.$post>) {
      return parseResponse(client.Quotes.$post(args, options))
    },
  })
}

export function injectPostQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$post>>>>>,
        TError,
        InferRequestType<typeof client.Quotes.$post>,
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
    const mutationDefaults = getPostQuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQuotesQuoteIDQueryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID', keyArgs] as const
}

export function getQuotesQuoteIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDQueryKey>
  >({
    queryKey: getQuotesQuoteIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuotesQuoteID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotesQuoteIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostQuotesQuoteIDMutationKey() {
  return ['Quotes', '/Quotes/:QuoteID', 'POST'] as const
}

export function getPostQuotesQuoteIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>) {
      return parseResponse(client.Quotes[':QuoteID'].$post(args, options))
    },
  })
}

export function injectPostQuotesQuoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQuotesQuoteIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/History', keyArgs] as const
}

export function getQuotesQuoteIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDHistoryQueryKey>
  >({
    queryKey: getQuotesQuoteIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuotesQuoteIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDHistoryQueryKey>
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
      ...getQuotesQuoteIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutQuotesQuoteIDHistoryMutationKey() {
  return ['Quotes', '/Quotes/:QuoteID/History', 'PUT'] as const
}

export function getPutQuotesQuoteIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']>,
    ) {
      return parseResponse(client.Quotes[':QuoteID'].History.$put(args, options))
    },
  })
}

export function injectPutQuotesQuoteIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']>,
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
    const mutationDefaults = getPutQuotesQuoteIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQuotesQuoteIDPdfQueryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/pdf', keyArgs] as const
}

export function getQuotesQuoteIDPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDPdfQueryKey>
  >({
    queryKey: getQuotesQuoteIDPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuotesQuoteIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotesQuoteIDPdfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getQuotesQuoteIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsQueryKey>
  >({
    queryKey: getQuotesQuoteIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuotesQuoteIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDAttachmentsQueryKey>
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
      ...getQuotesQuoteIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getQuotesQuoteIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getQuotesQuoteIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuotesQuoteIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDAttachmentsAttachmentIDQueryKey>
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
      ...getQuotesQuoteIDAttachmentsAttachmentIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getQuotesQuoteIDAttachmentsFileNameQueryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getQuotesQuoteIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuotesQuoteIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotesQuoteIDAttachmentsFileNameQueryKey>
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
      ...getQuotesQuoteIDAttachmentsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutQuotesQuoteIDAttachmentsFileNameMutationKey() {
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', 'PUT'] as const
}

export function getPutQuotesQuoteIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$put(args, options))
    },
  })
}

export function injectPutQuotesQuoteIDAttachmentsFileName<
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
                ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>,
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
    const mutationDefaults = getPutQuotesQuoteIDAttachmentsFileNameMutationOptions<
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

export function getPostQuotesQuoteIDAttachmentsFileNameMutationKey() {
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', 'POST'] as const
}

export function getPostQuotesQuoteIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$post(args, options))
    },
  })
}

export function injectPostQuotesQuoteIDAttachmentsFileName<
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
                ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIDAttachmentsFileNameMutationOptions<
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

export function getReceiptsQueryKey(args: InferRequestType<typeof client.Receipts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts', keyArgs] as const
}

export function getReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Receipts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReceiptsQueryKey>
  >({
    queryKey: getReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Receipts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReceiptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutReceiptsMutationKey() {
  return ['Receipts', '/Receipts', 'PUT'] as const
}

export function getPutReceiptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$put>>>>>,
    TError,
    InferRequestType<typeof client.Receipts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Receipts.$put>) {
      return parseResponse(client.Receipts.$put(args, options))
    },
  })
}

export function injectPutReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$put>>>>>,
        TError,
        InferRequestType<typeof client.Receipts.$put>,
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
    const mutationDefaults = getPutReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReceiptsReceiptIDQueryKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID', keyArgs] as const
}

export function getReceiptsReceiptIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDQueryKey>
  >({
    queryKey: getReceiptsReceiptIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts[':ReceiptID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceiptsReceiptID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsReceiptIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReceiptsReceiptIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostReceiptsReceiptIDMutationKey() {
  return ['Receipts', '/Receipts/:ReceiptID', 'POST'] as const
}

export function getPostReceiptsReceiptIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReceiptsReceiptIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']>) {
      return parseResponse(client.Receipts[':ReceiptID'].$post(args, options))
    },
  })
}

export function injectPostReceiptsReceiptID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']>,
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
    const mutationDefaults = getPostReceiptsReceiptIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReceiptsReceiptIDAttachmentsQueryKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsQueryKey>
  >({
    queryKey: getReceiptsReceiptIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceiptsReceiptIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsReceiptIDAttachmentsQueryKey>
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
      ...getReceiptsReceiptIDAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:AttachmentID', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceiptsReceiptIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey>
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
      ...getReceiptsReceiptIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getReceiptsReceiptIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getReceiptsReceiptIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceiptsReceiptIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsReceiptIDAttachmentsFileNameQueryKey>
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
      ...getReceiptsReceiptIDAttachmentsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutReceiptsReceiptIDAttachmentsFileNameMutationKey() {
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', 'PUT'] as const
}

export function getPutReceiptsReceiptIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsReceiptIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':FileName'].$put(args, options),
      )
    },
  })
}

export function injectPutReceiptsReceiptIDAttachmentsFileName<
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
                  (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']
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
    const mutationDefaults = getPutReceiptsReceiptIDAttachmentsFileNameMutationOptions<
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

export function getPostReceiptsReceiptIDAttachmentsFileNameMutationKey() {
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', 'POST'] as const
}

export function getPostReceiptsReceiptIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReceiptsReceiptIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':FileName'].$post(args, options),
      )
    },
  })
}

export function injectPostReceiptsReceiptIDAttachmentsFileName<
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
                  (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']
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
    const mutationDefaults = getPostReceiptsReceiptIDAttachmentsFileNameMutationOptions<
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

export function getReceiptsReceiptIDHistoryQueryKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/History', keyArgs] as const
}

export function getReceiptsReceiptIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDHistoryQueryKey>
  >({
    queryKey: getReceiptsReceiptIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Receipts[':ReceiptID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReceiptsReceiptIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsReceiptIDHistoryQueryKey>
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
      ...getReceiptsReceiptIDHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutReceiptsReceiptIDHistoryMutationKey() {
  return ['Receipts', '/Receipts/:ReceiptID/History', 'PUT'] as const
}

export function getPutReceiptsReceiptIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsReceiptIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>,
    ) {
      return parseResponse(client.Receipts[':ReceiptID'].History.$put(args, options))
    },
  })
}

export function injectPutReceiptsReceiptIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>,
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
    const mutationDefaults = getPutReceiptsReceiptIDHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRepeatingInvoicesQueryKey(
  args: InferRequestType<typeof client.RepeatingInvoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices', keyArgs] as const
}

export function getRepeatingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.RepeatingInvoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesQueryKey>
  >({
    queryKey: getRepeatingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRepeatingInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.RepeatingInvoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRepeatingInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRepeatingInvoicesMutationKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices', 'PUT'] as const
}

export function getPutRepeatingInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.RepeatingInvoices.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRepeatingInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RepeatingInvoices.$put>) {
      return parseResponse(client.RepeatingInvoices.$put(args, options))
    },
  })
}

export function injectPutRepeatingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RepeatingInvoices.$put>,
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
    const mutationDefaults = getPutRepeatingInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRepeatingInvoicesMutationKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices', 'POST'] as const
}

export function getPostRepeatingInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RepeatingInvoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRepeatingInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RepeatingInvoices.$post>) {
      return parseResponse(client.RepeatingInvoices.$post(args, options))
    },
  })
}

export function injectPostRepeatingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RepeatingInvoices.$post>,
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
    const mutationDefaults = getPostRepeatingInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRepeatingInvoicesRepeatingInvoiceIDQueryKey(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID', keyArgs] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDQueryKey>
  >({
    queryKey: getRepeatingInvoicesRepeatingInvoiceIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRepeatingInvoicesRepeatingInvoiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDQueryKey>
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
      ...getRepeatingInvoicesRepeatingInvoiceIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRepeatingInvoicesRepeatingInvoiceIDMutationKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID', 'POST'] as const
}

export function getPostRepeatingInvoicesRepeatingInvoiceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepeatingInvoicesRepeatingInvoiceIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>,
    ) {
      return parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$post(args, options))
    },
  })
}

export function injectPostRepeatingInvoicesRepeatingInvoiceID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>,
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
    const mutationDefaults = getPostRepeatingInvoicesRepeatingInvoiceIDMutationOptions<
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

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey>
  >({
    queryKey: getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRepeatingInvoicesRepeatingInvoiceIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey>
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
      ...getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey>
  >({
    queryKey: getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey>
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
      ...getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey>
  >({
    queryKey: getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey>
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
      ...getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationKey() {
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
      >,
    ) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
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
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
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
      getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationKey() {
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    'POST',
  ] as const
}

export function getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
      >,
    ) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
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
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
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
      getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID/History', keyArgs] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey>
  >({
    queryKey: getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRepeatingInvoicesRepeatingInvoiceIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey>
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
      ...getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDHistoryMutationKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID/History', 'PUT'] as const
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRepeatingInvoicesRepeatingInvoiceIDHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']
      >,
    ) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].History.$put(args, options),
      )
    },
  })
}

export function injectPutRepeatingInvoicesRepeatingInvoiceIDHistory<
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
                  (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']
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
    const mutationDefaults = getPutRepeatingInvoicesRepeatingInvoiceIDHistoryMutationOptions<
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

export function getReportsTenNinetyNineQueryKey(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/TenNinetyNine', keyArgs] as const
}

export function getReportsTenNinetyNineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTenNinetyNineQueryKey>
  >({
    queryKey: getReportsTenNinetyNineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.TenNinetyNine.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsTenNinetyNine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsTenNinetyNineQueryKey>
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
      ...getReportsTenNinetyNineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsAgedPayablesByContactQueryKey(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/AgedPayablesByContact', keyArgs] as const
}

export function getReportsAgedPayablesByContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsAgedPayablesByContactQueryKey>
  >({
    queryKey: getReportsAgedPayablesByContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.AgedPayablesByContact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportsAgedPayablesByContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsAgedPayablesByContactQueryKey>
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
      ...getReportsAgedPayablesByContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsAgedReceivablesByContactQueryKey(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/AgedReceivablesByContact', keyArgs] as const
}

export function getReportsAgedReceivablesByContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsAgedReceivablesByContactQueryKey>
  >({
    queryKey: getReportsAgedReceivablesByContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.AgedReceivablesByContact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportsAgedReceivablesByContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsAgedReceivablesByContactQueryKey>
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
      ...getReportsAgedReceivablesByContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsBalanceSheetQueryKey(
  args: InferRequestType<typeof client.Reports.BalanceSheet.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BalanceSheet', keyArgs] as const
}

export function getReportsBalanceSheetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reports.BalanceSheet.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBalanceSheetQueryKey>
  >({
    queryKey: getReportsBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.BalanceSheet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsBalanceSheet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.BalanceSheet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBalanceSheetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsBalanceSheetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsBankSummaryQueryKey(
  args: InferRequestType<typeof client.Reports.BankSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BankSummary', keyArgs] as const
}

export function getReportsBankSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reports.BankSummary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBankSummaryQueryKey>
  >({
    queryKey: getReportsBankSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.BankSummary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsBankSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.BankSummary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBankSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsBankSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsReportIDQueryKey(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/:ReportID', keyArgs] as const
}

export function getReportsReportIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIDQueryKey>
  >({
    queryKey: getReportsReportIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports[':ReportID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsReportID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsReportIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsBudgetSummaryQueryKey(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BudgetSummary', keyArgs] as const
}

export function getReportsBudgetSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBudgetSummaryQueryKey>
  >({
    queryKey: getReportsBudgetSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.BudgetSummary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsBudgetSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.BudgetSummary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsBudgetSummaryQueryKey>
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
      ...getReportsBudgetSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsExecutiveSummaryQueryKey(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/ExecutiveSummary', keyArgs] as const
}

export function getReportsExecutiveSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsExecutiveSummaryQueryKey>
  >({
    queryKey: getReportsExecutiveSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.ExecutiveSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportsExecutiveSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsExecutiveSummaryQueryKey>
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
      ...getReportsExecutiveSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsQueryKey(args: InferRequestType<typeof client.Reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports', keyArgs] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsProfitAndLossQueryKey(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/ProfitAndLoss', keyArgs] as const
}

export function getReportsProfitAndLossQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsProfitAndLossQueryKey>
  >({
    queryKey: getReportsProfitAndLossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.ProfitAndLoss.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsProfitAndLoss<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsProfitAndLossQueryKey>
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
      ...getReportsProfitAndLossQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsTrialBalanceQueryKey(
  args: InferRequestType<typeof client.Reports.TrialBalance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/TrialBalance', keyArgs] as const
}

export function getReportsTrialBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reports.TrialBalance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTrialBalanceQueryKey>
  >({
    queryKey: getReportsTrialBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.TrialBalance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsTrialBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.TrialBalance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsTrialBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsTrialBalanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSetupMutationKey() {
  return ['Setup', '/Setup', 'POST'] as const
}

export function getPostSetupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Setup.$post>>>>>,
    TError,
    InferRequestType<typeof client.Setup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Setup.$post>) {
      return parseResponse(client.Setup.$post(args, options))
    },
  })
}

export function injectPostSetup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Setup.$post>>>>>,
        TError,
        InferRequestType<typeof client.Setup.$post>,
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
    const mutationDefaults = getPostSetupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTaxRatesQueryKey(args: InferRequestType<typeof client.TaxRates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['TaxRates', '/TaxRates', keyArgs] as const
}

export function getTaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.TaxRates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxRatesQueryKey>
  >({
    queryKey: getTaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.TaxRates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.TaxRates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTaxRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxRatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTaxRatesMutationKey() {
  return ['TaxRates', '/TaxRates', 'PUT'] as const
}

export function getPutTaxRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$put>>>>>,
    TError,
    InferRequestType<typeof client.TaxRates.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TaxRates.$put>) {
      return parseResponse(client.TaxRates.$put(args, options))
    },
  })
}

export function injectPutTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$put>>>>>,
        TError,
        InferRequestType<typeof client.TaxRates.$put>,
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
    const mutationDefaults = getPutTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTaxRatesMutationKey() {
  return ['TaxRates', '/TaxRates', 'POST'] as const
}

export function getPostTaxRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$post>>>>>,
    TError,
    InferRequestType<typeof client.TaxRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TaxRates.$post>) {
      return parseResponse(client.TaxRates.$post(args, options))
    },
  })
}

export function injectPostTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.TaxRates.$post>,
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
    const mutationDefaults = getPostTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTaxRatesTaxTypeQueryKey(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['TaxRates', '/TaxRates/:TaxType', keyArgs] as const
}

export function getTaxRatesTaxTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRatesTaxTypeQueryKey>
  >({
    queryKey: getTaxRatesTaxTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.TaxRates[':TaxType'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTaxRatesTaxType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaxRatesTaxTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxRatesTaxTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTrackingCategoriesQueryKey(
  args: InferRequestType<typeof client.TrackingCategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['TrackingCategories', '/TrackingCategories', keyArgs] as const
}

export function getTrackingCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.TrackingCategories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingCategoriesQueryKey>
  >({
    queryKey: getTrackingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.TrackingCategories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTrackingCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.TrackingCategories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrackingCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTrackingCategoriesMutationKey() {
  return ['TrackingCategories', '/TrackingCategories', 'PUT'] as const
}

export function getPutTrackingCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.TrackingCategories.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTrackingCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TrackingCategories.$put>) {
      return parseResponse(client.TrackingCategories.$put(args, options))
    },
  })
}

export function injectPutTrackingCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.TrackingCategories.$put>,
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
    const mutationDefaults = getPutTrackingCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTrackingCategoriesTrackingCategoryIDQueryKey(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', keyArgs] as const
}

export function getTrackingCategoriesTrackingCategoryIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingCategoriesTrackingCategoryIDQueryKey>
  >({
    queryKey: getTrackingCategoriesTrackingCategoryIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.TrackingCategories[':TrackingCategoryID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTrackingCategoriesTrackingCategoryID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingCategoriesTrackingCategoryIDQueryKey>
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
      ...getTrackingCategoriesTrackingCategoryIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostTrackingCategoriesTrackingCategoryIDMutationKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', 'POST'] as const
}

export function getPostTrackingCategoriesTrackingCategoryIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingCategoriesTrackingCategoryIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>,
    ) {
      return parseResponse(client.TrackingCategories[':TrackingCategoryID'].$post(args, options))
    },
  })
}

export function injectPostTrackingCategoriesTrackingCategoryID<
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
                ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>,
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
    const mutationDefaults = getPostTrackingCategoriesTrackingCategoryIDMutationOptions<
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

export function getDeleteTrackingCategoriesTrackingCategoryIDMutationKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', 'DELETE'] as const
}

export function getDeleteTrackingCategoriesTrackingCategoryIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrackingCategoriesTrackingCategoryIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>,
    ) {
      return parseResponse(client.TrackingCategories[':TrackingCategoryID'].$delete(args, options))
    },
  })
}

export function injectDeleteTrackingCategoriesTrackingCategoryID<
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
                ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>,
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
    const mutationDefaults = getDeleteTrackingCategoriesTrackingCategoryIDMutationOptions<
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

export function getPutTrackingCategoriesTrackingCategoryIDOptionsMutationKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID/Options', 'PUT'] as const
}

export function getPutTrackingCategoriesTrackingCategoryIDOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTrackingCategoriesTrackingCategoryIDOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']
      >,
    ) {
      return parseResponse(
        client.TrackingCategories[':TrackingCategoryID'].Options.$put(args, options),
      )
    },
  })
}

export function injectPutTrackingCategoriesTrackingCategoryIDOptions<
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
                  (typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']
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
    const mutationDefaults = getPutTrackingCategoriesTrackingCategoryIDOptionsMutationOptions<
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

export function getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationKey() {
  return [
    'TrackingCategories',
    '/TrackingCategories/:TrackingCategoryID/Options/:TrackingOptionID',
    'POST',
  ] as const
}

export function getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
      >,
    ) {
      return parseResponse(
        client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
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
                  (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
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
      getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
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

export function getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationKey() {
  return [
    'TrackingCategories',
    '/TrackingCategories/:TrackingCategoryID/Options/:TrackingOptionID',
    'DELETE',
  ] as const
}

export function getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
      >,
    ) {
      return parseResponse(
        client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
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
                  (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
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
      getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
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

export function getUsersQueryKey(args: InferRequestType<typeof client.Users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users', keyArgs] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIDQueryKey(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/:UserID', keyArgs] as const
}

export function getUsersUserIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIDQueryKey>
  >({
    queryKey: getUsersUserIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':UserID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUserID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':UserID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
