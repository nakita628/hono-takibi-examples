import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountsKey(args: InferRequestType<typeof client.Accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts', keyArgs] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.Accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.Accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAccountsKey() {
  return ['Accounts', '/Accounts', 'PUT'] as const
}

export function usePutAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Accounts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Accounts.$put> }) =>
        parseResponse(client.Accounts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIDKey(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID', keyArgs] as const
}

export function useGetAccountsAccountID<TError = unknown>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
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
        ? getGetAccountsAccountIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Accounts[':AccountID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountID<TError = unknown>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
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
        ? getGetAccountsAccountIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Accounts[':AccountID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIDKey() {
  return ['Accounts', '/Accounts/:AccountID', 'POST'] as const
}

export function usePostAccountsAccountID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Accounts)[':AccountID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Accounts)[':AccountID']['$post']> },
      ) => parseResponse(client.Accounts[':AccountID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIDKey() {
  return ['Accounts', '/Accounts/:AccountID', 'DELETE'] as const
}

export function useDeleteAccountsAccountID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']> },
      ) => parseResponse(client.Accounts[':AccountID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIDAttachmentsKey(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments', keyArgs] as const
}

export function useGetAccountsAccountIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
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
        ? getGetAccountsAccountIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Accounts[':AccountID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
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
        ? getGetAccountsAccountIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Accounts[':AccountID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetAccountsAccountIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
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
          client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
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
          client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', keyArgs] as const
}

export function useGetAccountsAccountIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
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
        ? getGetAccountsAccountIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Accounts[':AccountID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
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
        ? getGetAccountsAccountIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Accounts[':AccountID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIDAttachmentsFileNameKey() {
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', 'PUT'] as const
}

export function usePutAccountsAccountIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIDAttachmentsFileNameKey()
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
            (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Accounts[':AccountID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIDAttachmentsFileNameKey() {
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', 'POST'] as const
}

export function usePostAccountsAccountIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIDAttachmentsFileNameKey()
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
            (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Accounts[':AccountID'].Attachments[':FileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBatchPaymentsKey(args: InferRequestType<typeof client.BatchPayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments', keyArgs] as const
}

export function useGetBatchPayments<TError = unknown>(
  args: InferRequestType<typeof client.BatchPayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BatchPayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchPayments<TError = unknown>(
  args: InferRequestType<typeof client.BatchPayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BatchPayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBatchPaymentsKey() {
  return ['BatchPayments', '/BatchPayments', 'PUT'] as const
}

export function usePutBatchPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchPayments.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBatchPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchPayments.$put> }) =>
        parseResponse(client.BatchPayments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchPaymentsKey() {
  return ['BatchPayments', '/BatchPayments', 'POST'] as const
}

export function usePostBatchPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchPayments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchPayments.$post> }) =>
        parseResponse(client.BatchPayments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchPaymentsBatchPaymentIDKey(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID', keyArgs] as const
}

export function useGetBatchPaymentsBatchPaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
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
        ? getGetBatchPaymentsBatchPaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BatchPayments[':BatchPaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchPaymentsBatchPaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
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
        ? getGetBatchPaymentsBatchPaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BatchPayments[':BatchPaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBatchPaymentsBatchPaymentIDKey() {
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID', 'POST'] as const
}

export function usePostBatchPaymentsBatchPaymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchPaymentsBatchPaymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']> },
      ) => parseResponse(client.BatchPayments[':BatchPaymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchPaymentsBatchPaymentIDHistoryKey(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID/History', keyArgs] as const
}

export function useGetBatchPaymentsBatchPaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
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
        ? getGetBatchPaymentsBatchPaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BatchPayments[':BatchPaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchPaymentsBatchPaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
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
        ? getGetBatchPaymentsBatchPaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BatchPayments[':BatchPaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBatchPaymentsBatchPaymentIDHistoryKey() {
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID/History', 'PUT'] as const
}

export function usePutBatchPaymentsBatchPaymentIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBatchPaymentsBatchPaymentIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>
        },
      ) => parseResponse(client.BatchPayments[':BatchPaymentID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransactionsKey(
  args: InferRequestType<typeof client.BankTransactions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions', keyArgs] as const
}

export function useGetBankTransactions<TError = unknown>(
  args: InferRequestType<typeof client.BankTransactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
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
        ? getGetBankTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactions<TError = unknown>(
  args: InferRequestType<typeof client.BankTransactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
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
        ? getGetBankTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransactionsKey() {
  return ['BankTransactions', '/BankTransactions', 'PUT'] as const
}

export function usePutBankTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BankTransactions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BankTransactions.$put> }) =>
        parseResponse(client.BankTransactions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransactionsKey() {
  return ['BankTransactions', '/BankTransactions', 'POST'] as const
}

export function usePostBankTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BankTransactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BankTransactions.$post> }) =>
        parseResponse(client.BankTransactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransactionsBankTransactionIDKey(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID', keyArgs] as const
}

export function useGetBankTransactionsBankTransactionID<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
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
        ? getGetBankTransactionsBankTransactionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BankTransactions[':BankTransactionID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactionsBankTransactionID<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
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
        ? getGetBankTransactionsBankTransactionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BankTransactions[':BankTransactionID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBankTransactionsBankTransactionIDKey() {
  return ['BankTransactions', '/BankTransactions/:BankTransactionID', 'POST'] as const
}

export function usePostBankTransactionsBankTransactionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransactionsBankTransactionIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>
        },
      ) => parseResponse(client.BankTransactions[':BankTransactionID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransactionsBankTransactionIDAttachmentsKey(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/Attachments', keyArgs] as const
}

export function useGetBankTransactionsBankTransactionIDAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactionsBankTransactionIDAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBankTransactionsBankTransactionIDAttachmentsAttachmentIDKey(
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

export function useGetBankTransactionsBankTransactionIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactionsBankTransactionIDAttachmentsAttachmentID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBankTransactionsBankTransactionIDAttachmentsFileNameKey(
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

export function useGetBankTransactionsBankTransactionIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsFileNameKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactionsBankTransactionIDAttachmentsFileName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransactionsBankTransactionIDAttachmentsFileNameKey(args)
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
                (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
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
          client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransactionsBankTransactionIDAttachmentsFileNameKey() {
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function usePutBankTransactionsBankTransactionIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransactionsBankTransactionIDAttachmentsFileNameKey()
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
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransactionsBankTransactionIDAttachmentsFileNameKey() {
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    'POST',
  ] as const
}

export function usePostBankTransactionsBankTransactionIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransactionsBankTransactionIDAttachmentsFileNameKey()
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
            (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransactionsBankTransactionIDHistoryKey(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/History', keyArgs] as const
}

export function useGetBankTransactionsBankTransactionIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
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
        ? getGetBankTransactionsBankTransactionIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.BankTransactions[':BankTransactionID'].History.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransactionsBankTransactionIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
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
        ? getGetBankTransactionsBankTransactionIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.BankTransactions[':BankTransactionID'].History.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransactionsBankTransactionIDHistoryKey() {
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/History', 'PUT'] as const
}

export function usePutBankTransactionsBankTransactionIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransactionsBankTransactionIDHistoryKey()
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
            (typeof client.BankTransactions)[':BankTransactionID']['History']['$put']
          >
        },
      ) =>
        parseResponse(
          client.BankTransactions[':BankTransactionID'].History.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransfersKey(args: InferRequestType<typeof client.BankTransfers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers', keyArgs] as const
}

export function useGetBankTransfers<TError = unknown>(
  args: InferRequestType<typeof client.BankTransfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBankTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfers<TError = unknown>(
  args: InferRequestType<typeof client.BankTransfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBankTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransfersKey() {
  return ['BankTransfers', '/BankTransfers', 'PUT'] as const
}

export function usePutBankTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BankTransfers.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BankTransfers.$put> }) =>
        parseResponse(client.BankTransfers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransfersKey() {
  return ['BankTransfers', '/BankTransfers', 'POST'] as const
}

export function usePostBankTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BankTransfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BankTransfers.$post> }) =>
        parseResponse(client.BankTransfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransfersBankTransferIDKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID', keyArgs] as const
}

export function useGetBankTransfersBankTransferID<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
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
        ? getGetBankTransfersBankTransferIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransfers[':BankTransferID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfersBankTransferID<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
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
        ? getGetBankTransfersBankTransferIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BankTransfers[':BankTransferID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBankTransfersBankTransferIDKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID', 'POST'] as const
}

export function usePostBankTransfersBankTransferID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransfersBankTransferIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']> },
      ) => parseResponse(client.BankTransfers[':BankTransferID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransfersBankTransferIDAttachmentsKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments', keyArgs] as const
}

export function useGetBankTransfersBankTransferIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
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
        ? getGetBankTransfersBankTransferIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfersBankTransferIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
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
        ? getGetBankTransfersBankTransferIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBankTransfersBankTransferIDAttachmentsAttachmentIDKey(
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

export function useGetBankTransfersBankTransferIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransfersBankTransferIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
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
          client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfersBankTransferIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransfersBankTransferIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
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
          client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBankTransfersBankTransferIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', keyArgs] as const
}

export function useGetBankTransfersBankTransferIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransfersBankTransferIDAttachmentsFileNameKey(args)
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
                (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
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
          client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfersBankTransferIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBankTransfersBankTransferIDAttachmentsFileNameKey(args)
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
                (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
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
          client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransfersBankTransferIDAttachmentsFileNameKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', 'PUT'] as const
}

export function usePutBankTransfersBankTransferIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransfersBankTransferIDAttachmentsFileNameKey()
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
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransfersBankTransferIDAttachmentsFileNameKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', 'POST'] as const
}

export function usePostBankTransfersBankTransferIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransfersBankTransferIDAttachmentsFileNameKey()
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
            (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBankTransfersBankTransferIDHistoryKey(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BankTransfers', '/BankTransfers/:BankTransferID/History', keyArgs] as const
}

export function useGetBankTransfersBankTransferIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
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
        ? getGetBankTransfersBankTransferIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BankTransfers[':BankTransferID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankTransfersBankTransferIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
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
        ? getGetBankTransfersBankTransferIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BankTransfers[':BankTransferID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBankTransfersBankTransferIDHistoryKey() {
  return ['BankTransfers', '/BankTransfers/:BankTransferID/History', 'PUT'] as const
}

export function usePutBankTransfersBankTransferIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankTransfersBankTransferIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>
        },
      ) => parseResponse(client.BankTransfers[':BankTransferID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrandingThemesKey(args: InferRequestType<typeof client.BrandingThemes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes', keyArgs] as const
}

export function useGetBrandingThemes<TError = unknown>(
  args: InferRequestType<typeof client.BrandingThemes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingThemesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BrandingThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingThemes<TError = unknown>(
  args: InferRequestType<typeof client.BrandingThemes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingThemesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BrandingThemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrandingThemesBrandingThemeIDKey(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID', keyArgs] as const
}

export function useGetBrandingThemesBrandingThemeID<TError = unknown>(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
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
        ? getGetBrandingThemesBrandingThemeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BrandingThemes[':BrandingThemeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingThemesBrandingThemeID<TError = unknown>(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
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
        ? getGetBrandingThemesBrandingThemeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.BrandingThemes[':BrandingThemeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrandingThemesBrandingThemeIDPaymentServicesKey(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID/PaymentServices', keyArgs] as const
}

export function useGetBrandingThemesBrandingThemeIDPaymentServices<TError = unknown>(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBrandingThemesBrandingThemeIDPaymentServicesKey(args)
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
                (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
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
          client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingThemesBrandingThemeIDPaymentServices<TError = unknown>(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBrandingThemesBrandingThemeIDPaymentServicesKey(args)
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
                (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
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
          client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBrandingThemesBrandingThemeIDPaymentServicesKey() {
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID/PaymentServices', 'POST'] as const
}

export function usePostBrandingThemesBrandingThemeIDPaymentServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrandingThemesBrandingThemeIDPaymentServicesKey()
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
            (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.BrandingThemes[':BrandingThemeID'].PaymentServices.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBudgetsKey(args: InferRequestType<typeof client.Budgets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Budgets', '/Budgets', keyArgs] as const
}

export function useGetBudgets<TError = unknown>(
  args: InferRequestType<typeof client.Budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Budgets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBudgets<TError = unknown>(
  args: InferRequestType<typeof client.Budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Budgets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBudgetsBudgetIDKey(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Budgets', '/Budgets/:BudgetID', keyArgs] as const
}

export function useGetBudgetsBudgetID<TError = unknown>(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
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
        ? getGetBudgetsBudgetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Budgets[':BudgetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetID<TError = unknown>(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
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
        ? getGetBudgetsBudgetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Budgets[':BudgetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.Contacts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts', keyArgs] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.Contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.Contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutContactsKey() {
  return ['Contacts', '/Contacts', 'PUT'] as const
}

export function usePutContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Contacts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Contacts.$put> }) =>
        parseResponse(client.Contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsKey() {
  return ['Contacts', '/Contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Contacts.$post> }) =>
        parseResponse(client.Contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactNumberKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactNumber', keyArgs] as const
}

export function useGetContactsContactNumber<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
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
        ? getGetContactsContactNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactNumber<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
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
        ? getGetContactsContactNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIDKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID', keyArgs] as const
}

export function useGetContactsContactID<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
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
        ? getGetContactsContactIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactID<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
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
        ? getGetContactsContactIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIDKey() {
  return ['Contacts', '/Contacts/:ContactID', 'POST'] as const
}

export function usePostContactsContactID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Contacts)[':ContactID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Contacts)[':ContactID']['$post']> },
      ) => parseResponse(client.Contacts[':ContactID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIDAttachmentsKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments', keyArgs] as const
}

export function useGetContactsContactIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
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
        ? getGetContactsContactIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Contacts[':ContactID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
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
        ? getGetContactsContactIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Contacts[':ContactID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetContactsContactIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactsContactIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
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
          client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactsContactIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
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
          client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', keyArgs] as const
}

export function useGetContactsContactIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
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
        ? getGetContactsContactIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Contacts[':ContactID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
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
        ? getGetContactsContactIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Contacts[':ContactID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutContactsContactIDAttachmentsFileNameKey() {
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', 'PUT'] as const
}

export function usePutContactsContactIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsContactIDAttachmentsFileNameKey()
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
            (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Contacts[':ContactID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactsContactIDAttachmentsFileNameKey() {
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', 'POST'] as const
}

export function usePostContactsContactIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIDAttachmentsFileNameKey()
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
            (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Contacts[':ContactID'].Attachments[':FileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIDCISSettingsKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/CISSettings', keyArgs] as const
}

export function useGetContactsContactIDCISSettings<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
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
        ? getGetContactsContactIDCISSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Contacts[':ContactID'].CISSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIDCISSettings<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
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
        ? getGetContactsContactIDCISSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Contacts[':ContactID'].CISSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsContactIDHistoryKey(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Contacts', '/Contacts/:ContactID/History', keyArgs] as const
}

export function useGetContactsContactIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
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
        ? getGetContactsContactIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
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
        ? getGetContactsContactIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Contacts[':ContactID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsContactIDHistoryKey() {
  return ['Contacts', '/Contacts/:ContactID/History', 'PUT'] as const
}

export function usePutContactsContactIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsContactIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']> },
      ) => parseResponse(client.Contacts[':ContactID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactGroupsKey(args: InferRequestType<typeof client.ContactGroups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ContactGroups', '/ContactGroups', keyArgs] as const
}

export function useGetContactGroups<TError = unknown>(
  args: InferRequestType<typeof client.ContactGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ContactGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactGroups<TError = unknown>(
  args: InferRequestType<typeof client.ContactGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ContactGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactGroupsKey() {
  return ['ContactGroups', '/ContactGroups', 'PUT'] as const
}

export function usePutContactGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ContactGroups.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ContactGroups.$put> }) =>
        parseResponse(client.ContactGroups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactGroupsContactGroupIDKey(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ContactGroups', '/ContactGroups/:ContactGroupID', keyArgs] as const
}

export function useGetContactGroupsContactGroupID<TError = unknown>(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
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
        ? getGetContactGroupsContactGroupIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ContactGroups[':ContactGroupID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactGroupsContactGroupID<TError = unknown>(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
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
        ? getGetContactGroupsContactGroupIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ContactGroups[':ContactGroupID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactGroupsContactGroupIDKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID', 'POST'] as const
}

export function usePostContactGroupsContactGroupID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactGroupsContactGroupIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']> },
      ) => parseResponse(client.ContactGroups[':ContactGroupID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactGroupsContactGroupIDContactsKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts', 'PUT'] as const
}

export function usePutContactGroupsContactGroupIDContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactGroupsContactGroupIDContactsKey()
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
            (typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']
          >
        },
      ) => parseResponse(client.ContactGroups[':ContactGroupID'].Contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactGroupsContactGroupIDContactsKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts', 'DELETE'] as const
}

export function useDeleteContactGroupsContactGroupIDContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactGroupsContactGroupIDContactsKey()
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
            (typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']
          >
        },
      ) =>
        parseResponse(client.ContactGroups[':ContactGroupID'].Contacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactGroupsContactGroupIDContactsContactIDKey() {
  return ['ContactGroups', '/ContactGroups/:ContactGroupID/Contacts/:ContactID', 'DELETE'] as const
}

export function useDeleteContactGroupsContactGroupIDContactsContactID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactGroupsContactGroupIDContactsContactIDKey()
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
            (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ContactGroups[':ContactGroupID'].Contacts[':ContactID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesKey(args: InferRequestType<typeof client.CreditNotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes', keyArgs] as const
}

export function useGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.CreditNotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.CreditNotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCreditNotesKey() {
  return ['CreditNotes', '/CreditNotes', 'PUT'] as const
}

export function usePutCreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreditNotes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreditNotes.$put> }) =>
        parseResponse(client.CreditNotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesKey() {
  return ['CreditNotes', '/CreditNotes', 'POST'] as const
}

export function usePostCreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreditNotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreditNotes.$post> }) =>
        parseResponse(client.CreditNotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID', keyArgs] as const
}

export function useGetCreditNotesCreditNoteID<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes[':CreditNoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteID<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes[':CreditNoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIDKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID', 'POST'] as const
}

export function usePostCreditNotesCreditNoteID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']> },
      ) => parseResponse(client.CreditNotes[':CreditNoteID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDAttachmentsKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.CreditNotes[':CreditNoteID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.CreditNotes[':CreditNoteID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreditNotesCreditNoteIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
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
          client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreditNotesCreditNoteIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
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
          client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreditNotesCreditNoteIDAttachmentsFileNameKey(args)
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
                (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
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
          client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreditNotesCreditNoteIDAttachmentsFileNameKey(args)
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
                (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
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
          client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCreditNotesCreditNoteIDAttachmentsFileNameKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', 'PUT'] as const
}

export function usePutCreditNotesCreditNoteIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesCreditNoteIDAttachmentsFileNameKey()
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
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesCreditNoteIDAttachmentsFileNameKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', 'POST'] as const
}

export function usePostCreditNotesCreditNoteIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesCreditNoteIDAttachmentsFileNameKey()
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
            (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDPdfKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/pdf', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes[':CreditNoteID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.CreditNotes[':CreditNoteID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCreditNotesCreditNoteIDAllocationsKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Allocations', 'PUT'] as const
}

export function usePutCreditNotesCreditNoteIDAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesCreditNoteIDAllocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>
        },
      ) => parseResponse(client.CreditNotes[':CreditNoteID'].Allocations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Allocations/:AllocationID', 'DELETE'] as const
}

export function useDeleteCreditNotesCreditNoteIDAllocationsAllocationID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDKey()
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
            (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.CreditNotes[':CreditNoteID'].Allocations[':AllocationID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesCreditNoteIDHistoryKey(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/History', keyArgs] as const
}

export function useGetCreditNotesCreditNoteIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.CreditNotes[':CreditNoteID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesCreditNoteIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
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
        ? getGetCreditNotesCreditNoteIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.CreditNotes[':CreditNoteID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCreditNotesCreditNoteIDHistoryKey() {
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/History', 'PUT'] as const
}

export function usePutCreditNotesCreditNoteIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesCreditNoteIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>
        },
      ) => parseResponse(client.CreditNotes[':CreditNoteID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCurrenciesKey(args: InferRequestType<typeof client.Currencies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Currencies', '/Currencies', keyArgs] as const
}

export function useGetCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.Currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.Currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurrenciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCurrenciesKey() {
  return ['Currencies', '/Currencies', 'PUT'] as const
}

export function usePutCurrencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Currencies.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCurrenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Currencies.$put> }) =>
        parseResponse(client.Currencies.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExpenseClaimsKey(args: InferRequestType<typeof client.ExpenseClaims.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims', keyArgs] as const
}

export function useGetExpenseClaims<TError = unknown>(
  args: InferRequestType<typeof client.ExpenseClaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpenseClaimsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ExpenseClaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExpenseClaims<TError = unknown>(
  args: InferRequestType<typeof client.ExpenseClaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpenseClaimsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ExpenseClaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExpenseClaimsKey() {
  return ['ExpenseClaims', '/ExpenseClaims', 'PUT'] as const
}

export function usePutExpenseClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ExpenseClaims.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExpenseClaimsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ExpenseClaims.$put> }) =>
        parseResponse(client.ExpenseClaims.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExpenseClaimsExpenseClaimIDKey(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID', keyArgs] as const
}

export function useGetExpenseClaimsExpenseClaimID<TError = unknown>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
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
        ? getGetExpenseClaimsExpenseClaimIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExpenseClaimsExpenseClaimID<TError = unknown>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
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
        ? getGetExpenseClaimsExpenseClaimIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExpenseClaimsExpenseClaimIDKey() {
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID', 'POST'] as const
}

export function usePostExpenseClaimsExpenseClaimID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExpenseClaimsExpenseClaimIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']> },
      ) => parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExpenseClaimsExpenseClaimIDHistoryKey(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID/History', keyArgs] as const
}

export function useGetExpenseClaimsExpenseClaimIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
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
        ? getGetExpenseClaimsExpenseClaimIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExpenseClaimsExpenseClaimIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
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
        ? getGetExpenseClaimsExpenseClaimIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExpenseClaimsExpenseClaimIDHistoryKey() {
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID/History', 'PUT'] as const
}

export function usePutExpenseClaimsExpenseClaimIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExpenseClaimsExpenseClaimIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>
        },
      ) => parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.Invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices', keyArgs] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.Invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.Invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutInvoicesKey() {
  return ['Invoices', '/Invoices', 'PUT'] as const
}

export function usePutInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Invoices.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Invoices.$put> }) =>
        parseResponse(client.Invoices.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesKey() {
  return ['Invoices', '/Invoices', 'POST'] as const
}

export function usePostInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Invoices.$post> }) =>
        parseResponse(client.Invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID', keyArgs] as const
}

export function useGetInvoicesInvoiceID<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
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
        ? getGetInvoicesInvoiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceID<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
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
        ? getGetInvoicesInvoiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIDKey() {
  return ['Invoices', '/Invoices/:InvoiceID', 'POST'] as const
}

export function usePostInvoicesInvoiceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']> },
      ) => parseResponse(client.Invoices[':InvoiceID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDPdfKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/pdf', keyArgs] as const
}

export function useGetInvoicesInvoiceIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
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
        ? getGetInvoicesInvoiceIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
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
        ? getGetInvoicesInvoiceIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDAttachmentsKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments', keyArgs] as const
}

export function useGetInvoicesInvoiceIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
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
        ? getGetInvoicesInvoiceIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Invoices[':InvoiceID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
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
        ? getGetInvoicesInvoiceIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Invoices[':InvoiceID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetInvoicesInvoiceIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInvoicesInvoiceIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
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
          client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInvoicesInvoiceIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
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
          client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', keyArgs] as const
}

export function useGetInvoicesInvoiceIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
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
        ? getGetInvoicesInvoiceIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
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
        ? getGetInvoicesInvoiceIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutInvoicesInvoiceIDAttachmentsFileNameKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', 'PUT'] as const
}

export function usePutInvoicesInvoiceIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesInvoiceIDAttachmentsFileNameKey()
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
            (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIDAttachmentsFileNameKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', 'POST'] as const
}

export function usePostInvoicesInvoiceIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIDAttachmentsFileNameKey()
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
            (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':FileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDOnlineInvoiceKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/OnlineInvoice', keyArgs] as const
}

export function useGetInvoicesInvoiceIDOnlineInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
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
        ? getGetInvoicesInvoiceIDOnlineInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Invoices[':InvoiceID'].OnlineInvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDOnlineInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
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
        ? getGetInvoicesInvoiceIDOnlineInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Invoices[':InvoiceID'].OnlineInvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesInvoiceIDEmailKey() {
  return ['Invoices', '/Invoices/:InvoiceID/Email', 'POST'] as const
}

export function usePostInvoicesInvoiceIDEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesInvoiceIDEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']> },
      ) => parseResponse(client.Invoices[':InvoiceID'].Email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesInvoiceIDHistoryKey(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Invoices', '/Invoices/:InvoiceID/History', keyArgs] as const
}

export function useGetInvoicesInvoiceIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
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
        ? getGetInvoicesInvoiceIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesInvoiceIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
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
        ? getGetInvoicesInvoiceIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Invoices[':InvoiceID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInvoicesInvoiceIDHistoryKey() {
  return ['Invoices', '/Invoices/:InvoiceID/History', 'PUT'] as const
}

export function usePutInvoicesInvoiceIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesInvoiceIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']> },
      ) => parseResponse(client.Invoices[':InvoiceID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoiceRemindersSettingsKey(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['InvoiceReminders', '/InvoiceReminders/Settings', keyArgs] as const
}

export function useGetInvoiceRemindersSettings<TError = unknown>(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
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
        ? getGetInvoiceRemindersSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.InvoiceReminders.Settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoiceRemindersSettings<TError = unknown>(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
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
        ? getGetInvoiceRemindersSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.InvoiceReminders.Settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsKey(args: InferRequestType<typeof client.Items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items', keyArgs] as const
}

export function useGetItems<TError = unknown>(
  args: InferRequestType<typeof client.Items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetItems<TError = unknown>(
  args: InferRequestType<typeof client.Items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutItemsKey() {
  return ['Items', '/Items', 'PUT'] as const
}

export function usePutItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Items.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Items.$put> }) =>
        parseResponse(client.Items.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsKey() {
  return ['Items', '/Items', 'POST'] as const
}

export function usePostItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Items.$post> }) =>
        parseResponse(client.Items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIDKey(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items/:ItemID', keyArgs] as const
}

export function useGetItemsItemID<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsItemIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':ItemID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemID<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsItemIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':ItemID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIDKey() {
  return ['Items', '/Items/:ItemID', 'POST'] as const
}

export function usePostItemsItemID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':ItemID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':ItemID']['$post']> },
      ) => parseResponse(client.Items[':ItemID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemsItemIDKey() {
  return ['Items', '/Items/:ItemID', 'DELETE'] as const
}

export function useDeleteItemsItemID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':ItemID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemsItemIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':ItemID']['$delete']> },
      ) => parseResponse(client.Items[':ItemID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIDHistoryKey(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Items', '/Items/:ItemID/History', keyArgs] as const
}

export function useGetItemsItemIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
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
        ? getGetItemsItemIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':ItemID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
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
        ? getGetItemsItemIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':ItemID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutItemsItemIDHistoryKey() {
  return ['Items', '/Items/:ItemID/History', 'PUT'] as const
}

export function usePutItemsItemIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItemsItemIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']> },
      ) => parseResponse(client.Items[':ItemID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJournalsKey(args: InferRequestType<typeof client.Journals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals', keyArgs] as const
}

export function useGetJournals<TError = unknown>(
  args: InferRequestType<typeof client.Journals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Journals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJournals<TError = unknown>(
  args: InferRequestType<typeof client.Journals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Journals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetJournalsJournalIDKey(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals/:JournalID', keyArgs] as const
}

export function useGetJournalsJournalID<TError = unknown>(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
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
        ? getGetJournalsJournalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journals[':JournalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJournalsJournalID<TError = unknown>(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
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
        ? getGetJournalsJournalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journals[':JournalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJournalsJournalNumberKey(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Journals', '/Journals/:JournalNumber', keyArgs] as const
}

export function useGetJournalsJournalNumber<TError = unknown>(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
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
        ? getGetJournalsJournalNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journals[':JournalNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJournalsJournalNumber<TError = unknown>(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
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
        ? getGetJournalsJournalNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journals[':JournalNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinkedTransactionsKey(
  args: InferRequestType<typeof client.LinkedTransactions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['LinkedTransactions', '/LinkedTransactions', keyArgs] as const
}

export function useGetLinkedTransactions<TError = unknown>(
  args: InferRequestType<typeof client.LinkedTransactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
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
        ? getGetLinkedTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LinkedTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinkedTransactions<TError = unknown>(
  args: InferRequestType<typeof client.LinkedTransactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
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
        ? getGetLinkedTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LinkedTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLinkedTransactionsKey() {
  return ['LinkedTransactions', '/LinkedTransactions', 'PUT'] as const
}

export function usePutLinkedTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.LinkedTransactions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinkedTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LinkedTransactions.$put> }) =>
        parseResponse(client.LinkedTransactions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinkedTransactionsLinkedTransactionIDKey(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', keyArgs] as const
}

export function useGetLinkedTransactionsLinkedTransactionID<TError = unknown>(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
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
        ? getGetLinkedTransactionsLinkedTransactionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinkedTransactionsLinkedTransactionID<TError = unknown>(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
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
        ? getGetLinkedTransactionsLinkedTransactionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinkedTransactionsLinkedTransactionIDKey() {
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', 'POST'] as const
}

export function usePostLinkedTransactionsLinkedTransactionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkedTransactionsLinkedTransactionIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>
        },
      ) =>
        parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinkedTransactionsLinkedTransactionIDKey() {
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', 'DELETE'] as const
}

export function useDeleteLinkedTransactionsLinkedTransactionID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinkedTransactionsLinkedTransactionIDKey()
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
            (typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.LinkedTransactions[':LinkedTransactionID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManualJournalsKey(args: InferRequestType<typeof client.ManualJournals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals', keyArgs] as const
}

export function useGetManualJournals<TError = unknown>(
  args: InferRequestType<typeof client.ManualJournals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManualJournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ManualJournals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournals<TError = unknown>(
  args: InferRequestType<typeof client.ManualJournals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManualJournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ManualJournals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManualJournalsKey() {
  return ['ManualJournals', '/ManualJournals', 'PUT'] as const
}

export function usePutManualJournals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ManualJournals.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManualJournalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ManualJournals.$put> }) =>
        parseResponse(client.ManualJournals.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManualJournalsKey() {
  return ['ManualJournals', '/ManualJournals', 'POST'] as const
}

export function usePostManualJournals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ManualJournals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManualJournalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ManualJournals.$post> }) =>
        parseResponse(client.ManualJournals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManualJournalsManualJournalIDKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID', keyArgs] as const
}

export function useGetManualJournalsManualJournalID<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
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
        ? getGetManualJournalsManualJournalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ManualJournals[':ManualJournalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournalsManualJournalID<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
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
        ? getGetManualJournalsManualJournalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ManualJournals[':ManualJournalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManualJournalsManualJournalIDKey() {
  return ['ManualJournals', '/ManualJournals/:ManualJournalID', 'POST'] as const
}

export function usePostManualJournalsManualJournalID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManualJournalsManualJournalIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']> },
      ) => parseResponse(client.ManualJournals[':ManualJournalID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManualJournalsManualJournalIDAttachmentsKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/Attachments', keyArgs] as const
}

export function useGetManualJournalsManualJournalIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
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
        ? getGetManualJournalsManualJournalIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournalsManualJournalIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
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
        ? getGetManualJournalsManualJournalIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetManualJournalsManualJournalIDAttachmentsAttachmentIDKey(
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

export function useGetManualJournalsManualJournalIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetManualJournalsManualJournalIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
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
          client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournalsManualJournalIDAttachmentsAttachmentID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetManualJournalsManualJournalIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
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
          client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetManualJournalsManualJournalIDAttachmentsFileNameKey(
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

export function useGetManualJournalsManualJournalIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetManualJournalsManualJournalIDAttachmentsFileNameKey(args)
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
                (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
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
          client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournalsManualJournalIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetManualJournalsManualJournalIDAttachmentsFileNameKey(args)
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
                (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
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
          client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutManualJournalsManualJournalIDAttachmentsFileNameKey() {
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function usePutManualJournalsManualJournalIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManualJournalsManualJournalIDAttachmentsFileNameKey()
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
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostManualJournalsManualJournalIDAttachmentsFileNameKey() {
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    'POST',
  ] as const
}

export function usePostManualJournalsManualJournalIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManualJournalsManualJournalIDAttachmentsFileNameKey()
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
            (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetManualJournalsManualJournalIDHistoryKey(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/History', keyArgs] as const
}

export function useGetManualJournalsManualJournalIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
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
        ? getGetManualJournalsManualJournalIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ManualJournals[':ManualJournalID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManualJournalsManualJournalIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
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
        ? getGetManualJournalsManualJournalIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ManualJournals[':ManualJournalID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManualJournalsManualJournalIDHistoryKey() {
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/History', 'PUT'] as const
}

export function usePutManualJournalsManualJournalIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManualJournalsManualJournalIDHistoryKey()
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
            (typeof client.ManualJournals)[':ManualJournalID']['History']['$put']
          >
        },
      ) =>
        parseResponse(client.ManualJournals[':ManualJournalID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationKey(args: InferRequestType<typeof client.Organisation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation', keyArgs] as const
}

export function useGetOrganisation<TError = unknown>(
  args: InferRequestType<typeof client.Organisation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Organisation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisation<TError = unknown>(
  args: InferRequestType<typeof client.Organisation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Organisation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationActionsKey(
  args: InferRequestType<typeof client.Organisation.Actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation/Actions', keyArgs] as const
}

export function useGetOrganisationActions<TError = unknown>(
  args: InferRequestType<typeof client.Organisation.Actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
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
        ? getGetOrganisationActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Organisation.Actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationActions<TError = unknown>(
  args: InferRequestType<typeof client.Organisation.Actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
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
        ? getGetOrganisationActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Organisation.Actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationOrganisationIDCISSettingsKey(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Organisation', '/Organisation/:OrganisationID/CISSettings', keyArgs] as const
}

export function useGetOrganisationOrganisationIDCISSettings<TError = unknown>(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
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
        ? getGetOrganisationOrganisationIDCISSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Organisation[':OrganisationID'].CISSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationOrganisationIDCISSettings<TError = unknown>(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
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
        ? getGetOrganisationOrganisationIDCISSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Organisation[':OrganisationID'].CISSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOverpaymentsKey(args: InferRequestType<typeof client.Overpayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments', keyArgs] as const
}

export function useGetOverpayments<TError = unknown>(
  args: InferRequestType<typeof client.Overpayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOverpaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Overpayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverpayments<TError = unknown>(
  args: InferRequestType<typeof client.Overpayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOverpaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Overpayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOverpaymentsOverpaymentIDKey(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments/:OverpaymentID', keyArgs] as const
}

export function useGetOverpaymentsOverpaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
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
        ? getGetOverpaymentsOverpaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Overpayments[':OverpaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverpaymentsOverpaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
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
        ? getGetOverpaymentsOverpaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Overpayments[':OverpaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOverpaymentsOverpaymentIDAllocationsKey() {
  return ['Overpayments', '/Overpayments/:OverpaymentID/Allocations', 'PUT'] as const
}

export function usePutOverpaymentsOverpaymentIDAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOverpaymentsOverpaymentIDAllocationsKey()
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
            (typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']
          >
        },
      ) =>
        parseResponse(client.Overpayments[':OverpaymentID'].Allocations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDKey() {
  return [
    'Overpayments',
    '/Overpayments/:OverpaymentID/Allocations/:AllocationID',
    'DELETE',
  ] as const
}

export function useDeleteOverpaymentsOverpaymentIDAllocationsAllocationID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDKey()
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
            (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Overpayments[':OverpaymentID'].Allocations[':AllocationID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOverpaymentsOverpaymentIDHistoryKey(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Overpayments', '/Overpayments/:OverpaymentID/History', keyArgs] as const
}

export function useGetOverpaymentsOverpaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
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
        ? getGetOverpaymentsOverpaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Overpayments[':OverpaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOverpaymentsOverpaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
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
        ? getGetOverpaymentsOverpaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Overpayments[':OverpaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOverpaymentsOverpaymentIDHistoryKey() {
  return ['Overpayments', '/Overpayments/:OverpaymentID/History', 'PUT'] as const
}

export function usePutOverpaymentsOverpaymentIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOverpaymentsOverpaymentIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>
        },
      ) => parseResponse(client.Overpayments[':OverpaymentID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsKey(args: InferRequestType<typeof client.Payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments', keyArgs] as const
}

export function useGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.Payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.Payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutPaymentsKey() {
  return ['Payments', '/Payments', 'PUT'] as const
}

export function usePutPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Payments.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Payments.$put> }) =>
        parseResponse(client.Payments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsKey() {
  return ['Payments', '/Payments', 'POST'] as const
}

export function usePostPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Payments.$post> }) =>
        parseResponse(client.Payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsPaymentIDKey(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments/:PaymentID', keyArgs] as const
}

export function useGetPaymentsPaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
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
        ? getGetPaymentsPaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payments[':PaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsPaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
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
        ? getGetPaymentsPaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payments[':PaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsPaymentIDKey() {
  return ['Payments', '/Payments/:PaymentID', 'POST'] as const
}

export function usePostPaymentsPaymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Payments)[':PaymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Payments)[':PaymentID']['$post']> },
      ) => parseResponse(client.Payments[':PaymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsPaymentIDHistoryKey(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Payments', '/Payments/:PaymentID/History', keyArgs] as const
}

export function useGetPaymentsPaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
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
        ? getGetPaymentsPaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payments[':PaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsPaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
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
        ? getGetPaymentsPaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Payments[':PaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaymentsPaymentIDHistoryKey() {
  return ['Payments', '/Payments/:PaymentID/History', 'PUT'] as const
}

export function usePutPaymentsPaymentIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentsPaymentIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']> },
      ) => parseResponse(client.Payments[':PaymentID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentServicesKey(
  args: InferRequestType<typeof client.PaymentServices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['PaymentServices', '/PaymentServices', keyArgs] as const
}

export function useGetPaymentServices<TError = unknown>(
  args: InferRequestType<typeof client.PaymentServices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
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
        ? getGetPaymentServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PaymentServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentServices<TError = unknown>(
  args: InferRequestType<typeof client.PaymentServices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
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
        ? getGetPaymentServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PaymentServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaymentServicesKey() {
  return ['PaymentServices', '/PaymentServices', 'PUT'] as const
}

export function usePutPaymentServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PaymentServices.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PaymentServices.$put> }) =>
        parseResponse(client.PaymentServices.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrepaymentsKey(args: InferRequestType<typeof client.Prepayments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments', keyArgs] as const
}

export function useGetPrepayments<TError = unknown>(
  args: InferRequestType<typeof client.Prepayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrepaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Prepayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrepayments<TError = unknown>(
  args: InferRequestType<typeof client.Prepayments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrepaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Prepayments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPrepaymentsPrepaymentIDKey(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments/:PrepaymentID', keyArgs] as const
}

export function useGetPrepaymentsPrepaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
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
        ? getGetPrepaymentsPrepaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Prepayments[':PrepaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrepaymentsPrepaymentID<TError = unknown>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
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
        ? getGetPrepaymentsPrepaymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Prepayments[':PrepaymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPrepaymentsPrepaymentIDAllocationsKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/Allocations', 'PUT'] as const
}

export function usePutPrepaymentsPrepaymentIDAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrepaymentsPrepaymentIDAllocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>
        },
      ) => parseResponse(client.Prepayments[':PrepaymentID'].Allocations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/Allocations/:AllocationID', 'DELETE'] as const
}

export function useDeletePrepaymentsPrepaymentIDAllocationsAllocationID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDKey()
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
            (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Prepayments[':PrepaymentID'].Allocations[':AllocationID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPrepaymentsPrepaymentIDHistoryKey(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Prepayments', '/Prepayments/:PrepaymentID/History', keyArgs] as const
}

export function useGetPrepaymentsPrepaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
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
        ? getGetPrepaymentsPrepaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Prepayments[':PrepaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrepaymentsPrepaymentIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
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
        ? getGetPrepaymentsPrepaymentIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Prepayments[':PrepaymentID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPrepaymentsPrepaymentIDHistoryKey() {
  return ['Prepayments', '/Prepayments/:PrepaymentID/History', 'PUT'] as const
}

export function usePutPrepaymentsPrepaymentIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrepaymentsPrepaymentIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>
        },
      ) => parseResponse(client.Prepayments[':PrepaymentID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersKey(args: InferRequestType<typeof client.PurchaseOrders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders', keyArgs] as const
}

export function useGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.PurchaseOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PurchaseOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.PurchaseOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.PurchaseOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPurchaseOrdersKey() {
  return ['PurchaseOrders', '/PurchaseOrders', 'PUT'] as const
}

export function usePutPurchaseOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PurchaseOrders.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PurchaseOrders.$put> }) =>
        parseResponse(client.PurchaseOrders.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPurchaseOrdersKey() {
  return ['PurchaseOrders', '/PurchaseOrders', 'POST'] as const
}

export function usePostPurchaseOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PurchaseOrders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PurchaseOrders.$post> }) =>
        parseResponse(client.PurchaseOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDPdfKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/pdf', keyArgs] as const
}

export function useGetPurchaseOrdersPurchaseOrderIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID', keyArgs] as const
}

export function useGetPurchaseOrdersPurchaseOrderID<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderID<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPurchaseOrdersPurchaseOrderIDKey() {
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID', 'POST'] as const
}

export function usePostPurchaseOrdersPurchaseOrderID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersPurchaseOrderIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']> },
      ) => parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderNumberKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderNumber', keyArgs] as const
}

export function useGetPurchaseOrdersPurchaseOrderNumber<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderNumber<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
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
        ? getGetPurchaseOrdersPurchaseOrderNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDHistoryKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/History', keyArgs] as const
}

export function useGetPurchaseOrdersPurchaseOrderIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
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
        ? getGetPurchaseOrdersPurchaseOrderIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
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
        ? getGetPurchaseOrdersPurchaseOrderIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPurchaseOrdersPurchaseOrderIDHistoryKey() {
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/History', 'PUT'] as const
}

export function usePutPurchaseOrdersPurchaseOrderIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersPurchaseOrderIDHistoryKey()
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
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']
          >
        },
      ) =>
        parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDAttachmentsKey(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/Attachments', keyArgs] as const
}

export function useGetPurchaseOrdersPurchaseOrderIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDKey(
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

export function useGetPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
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
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
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
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey(
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

export function useGetPurchaseOrdersPurchaseOrderIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey(args)
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
                (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
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
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersPurchaseOrderIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey(args)
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
                (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
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
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey() {
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function usePutPurchaseOrdersPurchaseOrderIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey()
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
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey() {
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    'POST',
  ] as const
}

export function usePostPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameKey()
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
            (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesKey(args: InferRequestType<typeof client.Quotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes', keyArgs] as const
}

export function useGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.Quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.Quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutQuotesKey() {
  return ['Quotes', '/Quotes', 'PUT'] as const
}

export function usePutQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Quotes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Quotes.$put> }) =>
        parseResponse(client.Quotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesKey() {
  return ['Quotes', '/Quotes', 'POST'] as const
}

export function usePostQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Quotes.$post> }) =>
        parseResponse(client.Quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIDKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID', keyArgs] as const
}

export function useGetQuotesQuoteID<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteID<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotesQuoteIDKey() {
  return ['Quotes', '/Quotes/:QuoteID', 'POST'] as const
}

export function usePostQuotesQuoteID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']> },
      ) => parseResponse(client.Quotes[':QuoteID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIDHistoryKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/History', keyArgs] as const
}

export function useGetQuotesQuoteIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
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
        ? getGetQuotesQuoteIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
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
        ? getGetQuotesQuoteIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotesQuoteIDHistoryKey() {
  return ['Quotes', '/Quotes/:QuoteID/History', 'PUT'] as const
}

export function usePutQuotesQuoteIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']> },
      ) => parseResponse(client.Quotes[':QuoteID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIDPdfKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/pdf', keyArgs] as const
}

export function useGetQuotesQuoteIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
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
        ? getGetQuotesQuoteIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIDPdf<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
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
        ? getGetQuotesQuoteIDPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesQuoteIDAttachmentsKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments', keyArgs] as const
}

export function useGetQuotesQuoteIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
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
        ? getGetQuotesQuoteIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
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
        ? getGetQuotesQuoteIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Quotes[':QuoteID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesQuoteIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetQuotesQuoteIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
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
        ? getGetQuotesQuoteIDAttachmentsAttachmentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
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
        ? getGetQuotesQuoteIDAttachmentsAttachmentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesQuoteIDAttachmentsFileNameKey(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', keyArgs] as const
}

export function useGetQuotesQuoteIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
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
        ? getGetQuotesQuoteIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
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
        ? getGetQuotesQuoteIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotesQuoteIDAttachmentsFileNameKey() {
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', 'PUT'] as const
}

export function usePutQuotesQuoteIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIDAttachmentsFileNameKey()
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
            (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIDAttachmentsFileNameKey() {
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', 'POST'] as const
}

export function usePostQuotesQuoteIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIDAttachmentsFileNameKey()
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
            (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsKey(args: InferRequestType<typeof client.Receipts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts', keyArgs] as const
}

export function useGetReceipts<TError = unknown>(
  args: InferRequestType<typeof client.Receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Receipts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReceipts<TError = unknown>(
  args: InferRequestType<typeof client.Receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Receipts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutReceiptsKey() {
  return ['Receipts', '/Receipts', 'PUT'] as const
}

export function usePutReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Receipts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Receipts.$put> }) =>
        parseResponse(client.Receipts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsReceiptIDKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID', keyArgs] as const
}

export function useGetReceiptsReceiptID<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
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
        ? getGetReceiptsReceiptIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Receipts[':ReceiptID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsReceiptID<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
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
        ? getGetReceiptsReceiptIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Receipts[':ReceiptID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReceiptsReceiptIDKey() {
  return ['Receipts', '/Receipts/:ReceiptID', 'POST'] as const
}

export function usePostReceiptsReceiptID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReceiptsReceiptIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']> },
      ) => parseResponse(client.Receipts[':ReceiptID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsReceiptIDAttachmentsKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments', keyArgs] as const
}

export function useGetReceiptsReceiptIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
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
        ? getGetReceiptsReceiptIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Receipts[':ReceiptID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsReceiptIDAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
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
        ? getGetReceiptsReceiptIDAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Receipts[':ReceiptID'].Attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReceiptsReceiptIDAttachmentsAttachmentIDKey(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:AttachmentID', keyArgs] as const
}

export function useGetReceiptsReceiptIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetReceiptsReceiptIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
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
          client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsReceiptIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetReceiptsReceiptIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
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
          client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReceiptsReceiptIDAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', keyArgs] as const
}

export function useGetReceiptsReceiptIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
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
        ? getGetReceiptsReceiptIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsReceiptIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
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
        ? getGetReceiptsReceiptIDAttachmentsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutReceiptsReceiptIDAttachmentsFileNameKey() {
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', 'PUT'] as const
}

export function usePutReceiptsReceiptIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsReceiptIDAttachmentsFileNameKey()
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
            (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':FileName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostReceiptsReceiptIDAttachmentsFileNameKey() {
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', 'POST'] as const
}

export function usePostReceiptsReceiptIDAttachmentsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReceiptsReceiptIDAttachmentsFileNameKey()
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
            (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':FileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsReceiptIDHistoryKey(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Receipts', '/Receipts/:ReceiptID/History', keyArgs] as const
}

export function useGetReceiptsReceiptIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
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
        ? getGetReceiptsReceiptIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Receipts[':ReceiptID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsReceiptIDHistory<TError = unknown>(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
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
        ? getGetReceiptsReceiptIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Receipts[':ReceiptID'].History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReceiptsReceiptIDHistoryKey() {
  return ['Receipts', '/Receipts/:ReceiptID/History', 'PUT'] as const
}

export function usePutReceiptsReceiptIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsReceiptIDHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']> },
      ) => parseResponse(client.Receipts[':ReceiptID'].History.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRepeatingInvoicesKey(
  args: InferRequestType<typeof client.RepeatingInvoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices', keyArgs] as const
}

export function useGetRepeatingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.RepeatingInvoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
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
        ? getGetRepeatingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.RepeatingInvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.RepeatingInvoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
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
        ? getGetRepeatingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.RepeatingInvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRepeatingInvoicesKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices', 'PUT'] as const
}

export function usePutRepeatingInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RepeatingInvoices.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepeatingInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RepeatingInvoices.$put> }) =>
        parseResponse(client.RepeatingInvoices.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRepeatingInvoicesKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices', 'POST'] as const
}

export function usePostRepeatingInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RepeatingInvoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepeatingInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RepeatingInvoices.$post> }) =>
        parseResponse(client.RepeatingInvoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRepeatingInvoicesRepeatingInvoiceIDKey(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID', keyArgs] as const
}

export function useGetRepeatingInvoicesRepeatingInvoiceID<TError = unknown>(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoicesRepeatingInvoiceID<TError = unknown>(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRepeatingInvoicesRepeatingInvoiceIDKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID', 'POST'] as const
}

export function usePostRepeatingInvoicesRepeatingInvoiceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepeatingInvoicesRepeatingInvoiceIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>
        },
      ) => parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsKey(
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

export function useGetRepeatingInvoicesRepeatingInvoiceIDAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoicesRepeatingInvoiceIDAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDKey(
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

export function useGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentID<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey(
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

export function useGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey() {
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    'PUT',
  ] as const
}

export function usePutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey()
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
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey() {
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    'POST',
  ] as const
}

export function usePostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameKey()
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
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepeatingInvoicesRepeatingInvoiceIDHistoryKey(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID/History', keyArgs] as const
}

export function useGetRepeatingInvoicesRepeatingInvoiceIDHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDHistoryKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepeatingInvoicesRepeatingInvoiceIDHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRepeatingInvoicesRepeatingInvoiceIDHistoryKey(args)
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
                (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
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
          client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepeatingInvoicesRepeatingInvoiceIDHistoryKey() {
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID/History', 'PUT'] as const
}

export function usePutRepeatingInvoicesRepeatingInvoiceIDHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepeatingInvoicesRepeatingInvoiceIDHistoryKey()
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
            (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']
          >
        },
      ) =>
        parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].History.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetReportsTenNinetyNineKey(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/TenNinetyNine', keyArgs] as const
}

export function useGetReportsTenNinetyNine<TError = unknown>(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
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
        ? getGetReportsTenNinetyNineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.TenNinetyNine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsTenNinetyNine<TError = unknown>(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
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
        ? getGetReportsTenNinetyNineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.TenNinetyNine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsAgedPayablesByContactKey(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/AgedPayablesByContact', keyArgs] as const
}

export function useGetReportsAgedPayablesByContact<TError = unknown>(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
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
        ? getGetReportsAgedPayablesByContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.AgedPayablesByContact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsAgedPayablesByContact<TError = unknown>(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
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
        ? getGetReportsAgedPayablesByContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.AgedPayablesByContact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsAgedReceivablesByContactKey(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/AgedReceivablesByContact', keyArgs] as const
}

export function useGetReportsAgedReceivablesByContact<TError = unknown>(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
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
        ? getGetReportsAgedReceivablesByContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.AgedReceivablesByContact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsAgedReceivablesByContact<TError = unknown>(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
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
        ? getGetReportsAgedReceivablesByContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.AgedReceivablesByContact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsBalanceSheetKey(
  args: InferRequestType<typeof client.Reports.BalanceSheet.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BalanceSheet', keyArgs] as const
}

export function useGetReportsBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BalanceSheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
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
        ? getGetReportsBalanceSheetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BalanceSheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BalanceSheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
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
        ? getGetReportsBalanceSheetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BalanceSheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsBankSummaryKey(
  args: InferRequestType<typeof client.Reports.BankSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BankSummary', keyArgs] as const
}

export function useGetReportsBankSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BankSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
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
        ? getGetReportsBankSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BankSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsBankSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BankSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
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
        ? getGetReportsBankSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BankSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsReportIDKey(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/:ReportID', keyArgs] as const
}

export function useGetReportsReportID<TError = unknown>(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
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
        ? getGetReportsReportIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports[':ReportID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsReportID<TError = unknown>(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
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
        ? getGetReportsReportIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports[':ReportID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsBudgetSummaryKey(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/BudgetSummary', keyArgs] as const
}

export function useGetReportsBudgetSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
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
        ? getGetReportsBudgetSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BudgetSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsBudgetSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
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
        ? getGetReportsBudgetSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.BudgetSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsExecutiveSummaryKey(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/ExecutiveSummary', keyArgs] as const
}

export function useGetReportsExecutiveSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
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
        ? getGetReportsExecutiveSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.ExecutiveSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsExecutiveSummary<TError = unknown>(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
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
        ? getGetReportsExecutiveSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.ExecutiveSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsKey(args: InferRequestType<typeof client.Reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports', keyArgs] as const
}

export function useGetReports<TError = unknown>(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Reports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReports<TError = unknown>(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Reports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetReportsProfitAndLossKey(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/ProfitAndLoss', keyArgs] as const
}

export function useGetReportsProfitAndLoss<TError = unknown>(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
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
        ? getGetReportsProfitAndLossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.ProfitAndLoss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsProfitAndLoss<TError = unknown>(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
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
        ? getGetReportsProfitAndLossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.ProfitAndLoss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsTrialBalanceKey(
  args: InferRequestType<typeof client.Reports.TrialBalance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports/TrialBalance', keyArgs] as const
}

export function useGetReportsTrialBalance<TError = unknown>(
  args: InferRequestType<typeof client.Reports.TrialBalance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
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
        ? getGetReportsTrialBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.TrialBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsTrialBalance<TError = unknown>(
  args: InferRequestType<typeof client.Reports.TrialBalance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
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
        ? getGetReportsTrialBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Reports.TrialBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupKey() {
  return ['Setup', '/Setup', 'POST'] as const
}

export function usePostSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Setup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Setup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Setup.$post> }) =>
        parseResponse(client.Setup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxRatesKey(args: InferRequestType<typeof client.TaxRates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['TaxRates', '/TaxRates', keyArgs] as const
}

export function useGetTaxRates<TError = unknown>(
  args: InferRequestType<typeof client.TaxRates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.TaxRates.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTaxRates<TError = unknown>(
  args: InferRequestType<typeof client.TaxRates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.TaxRates.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutTaxRatesKey() {
  return ['TaxRates', '/TaxRates', 'PUT'] as const
}

export function usePutTaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TaxRates.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TaxRates.$put> }) =>
        parseResponse(client.TaxRates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTaxRatesKey() {
  return ['TaxRates', '/TaxRates', 'POST'] as const
}

export function usePostTaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TaxRates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TaxRates.$post> }) =>
        parseResponse(client.TaxRates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxRatesTaxTypeKey(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['TaxRates', '/TaxRates/:TaxType', keyArgs] as const
}

export function useGetTaxRatesTaxType<TError = unknown>(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
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
        ? getGetTaxRatesTaxTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.TaxRates[':TaxType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxRatesTaxType<TError = unknown>(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
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
        ? getGetTaxRatesTaxTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.TaxRates[':TaxType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrackingCategoriesKey(
  args: InferRequestType<typeof client.TrackingCategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['TrackingCategories', '/TrackingCategories', keyArgs] as const
}

export function useGetTrackingCategories<TError = unknown>(
  args: InferRequestType<typeof client.TrackingCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
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
        ? getGetTrackingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.TrackingCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingCategories<TError = unknown>(
  args: InferRequestType<typeof client.TrackingCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
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
        ? getGetTrackingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.TrackingCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTrackingCategoriesKey() {
  return ['TrackingCategories', '/TrackingCategories', 'PUT'] as const
}

export function usePutTrackingCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TrackingCategories.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTrackingCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TrackingCategories.$put> }) =>
        parseResponse(client.TrackingCategories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingCategoriesTrackingCategoryIDKey(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', keyArgs] as const
}

export function useGetTrackingCategoriesTrackingCategoryID<TError = unknown>(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
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
        ? getGetTrackingCategoriesTrackingCategoryIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.TrackingCategories[':TrackingCategoryID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingCategoriesTrackingCategoryID<TError = unknown>(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
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
        ? getGetTrackingCategoriesTrackingCategoryIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.TrackingCategories[':TrackingCategoryID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTrackingCategoriesTrackingCategoryIDKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', 'POST'] as const
}

export function usePostTrackingCategoriesTrackingCategoryID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingCategoriesTrackingCategoryIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>
        },
      ) =>
        parseResponse(client.TrackingCategories[':TrackingCategoryID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTrackingCategoriesTrackingCategoryIDKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', 'DELETE'] as const
}

export function useDeleteTrackingCategoriesTrackingCategoryID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTrackingCategoriesTrackingCategoryIDKey()
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
            (typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']
          >
        },
      ) =>
        parseResponse(client.TrackingCategories[':TrackingCategoryID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTrackingCategoriesTrackingCategoryIDOptionsKey() {
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID/Options', 'PUT'] as const
}

export function usePutTrackingCategoriesTrackingCategoryIDOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTrackingCategoriesTrackingCategoryIDOptionsKey()
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
            (typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.TrackingCategories[':TrackingCategoryID'].Options.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDKey() {
  return [
    'TrackingCategories',
    '/TrackingCategories/:TrackingCategoryID/Options/:TrackingOptionID',
    'POST',
  ] as const
}

export function usePostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDKey()
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
            (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDKey() {
  return [
    'TrackingCategories',
    '/TrackingCategories/:TrackingCategoryID/Options/:TrackingOptionID',
    'DELETE',
  ] as const
}

export function useDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDKey()
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
            (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.Users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users', keyArgs] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersUserIDKey(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/:UserID', keyArgs] as const
}

export function useGetUsersUserID<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':UserID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserID<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':UserID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
