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

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Accounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Accounts', '/Accounts', keyArgs] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Accounts.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Accounts.$put>,
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
  const mutationDefaults = getPutAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Accounts', '/Accounts/:AccountID', keyArgs] as const
}

export function getAccountsAccountIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Accounts[':AccountID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Accounts[':AccountID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountsAccountID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Accounts', '/Accounts/:AccountID/Attachments', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Accounts[':AccountID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Accounts', '/Accounts/:AccountID/Attachments/:AttachmentID', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']>
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
                    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Accounts', '/Accounts/:AccountID/Attachments/:FileName', keyArgs] as const
}

export function getAccountsAccountIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Accounts[':AccountID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
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
                    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
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
                    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIDAttachmentsFileNameQueryKey>
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
            ReturnType<(typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Accounts[':AccountID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountsAccountIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIDAttachmentsFileNameMutationOptions<
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

export function usePostAccountsAccountIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIDAttachmentsFileNameMutationOptions<
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

export function getBatchPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BatchPayments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BatchPayments', '/BatchPayments', keyArgs] as const
}

export function getBatchPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BatchPayments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BatchPayments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BatchPayments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
          >,
          ReturnType<typeof getBatchPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BatchPayments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBatchPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.BatchPayments.$put>,
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
  const mutationDefaults = getPutBatchPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBatchPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchPayments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.BatchPayments.$post>,
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
  const mutationDefaults = getPostBatchPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchPaymentsBatchPaymentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID', keyArgs] as const
}

export function getBatchPaymentsBatchPaymentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchPaymentsBatchPaymentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BatchPayments[':BatchPaymentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchPaymentsBatchPaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBatchPaymentsBatchPaymentIDQueryKey>
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
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsBatchPaymentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchPaymentsBatchPaymentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BatchPayments[':BatchPaymentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBatchPaymentsBatchPaymentID<
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
                Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>,
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
  const mutationDefaults = getPostBatchPaymentsBatchPaymentIDMutationOptions<
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

export function getBatchPaymentsBatchPaymentIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BatchPayments', '/BatchPayments/:BatchPaymentID/History', keyArgs] as const
}

export function getBatchPaymentsBatchPaymentIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchPaymentsBatchPaymentIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BatchPayments[':BatchPaymentID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchPaymentsBatchPaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBatchPaymentsBatchPaymentIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchPaymentsBatchPaymentIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchPaymentsBatchPaymentIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BatchPayments[':BatchPaymentID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBatchPaymentsBatchPaymentIDHistory<
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
                  ReturnType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>,
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
  const mutationDefaults = getPutBatchPaymentsBatchPaymentIDHistoryMutationOptions<
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

export function getBankTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransactions', '/BankTransactions', keyArgs] as const
}

export function getBankTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>
            >
          >,
          ReturnType<typeof getBankTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.BankTransactions.$put>,
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
  const mutationDefaults = getPutBankTransactionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBankTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BankTransactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.BankTransactions.$post>,
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
  const mutationDefaults = getPostBankTransactionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBankTransactionsBankTransactionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransactions', '/BankTransactions/:BankTransactionID', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransactionsBankTransactionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransactionsBankTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBankTransactionsBankTransactionIDQueryKey>
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
          Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransactionsBankTransactionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions[':BankTransactionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBankTransactionsBankTransactionID<
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
                Awaited<ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>,
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
  const mutationDefaults = getPostBankTransactionsBankTransactionIDMutationOptions<
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

export function getBankTransactionsBankTransactionIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/Attachments', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransactionsBankTransactionIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransactionsBankTransactionIDAttachments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']>
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsQueryKey>
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
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransactionsBankTransactionIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions[':BankTransactionID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBankTransactionsBankTransactionIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBankTransactionsBankTransactionIDAttachmentsAttachmentIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'BankTransactions',
    '/BankTransactions/:BankTransactionID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getBankTransactionsBankTransactionIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransactionsBankTransactionIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey>
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
              (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBankTransactionsBankTransactionIDAttachmentsFileNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransactionsBankTransactionIDAttachmentsFileName<
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
    getPutBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
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

export function usePostBankTransactionsBankTransactionIDAttachmentsFileName<
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
    getPostBankTransactionsBankTransactionIDAttachmentsFileNameMutationOptions<
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

export function getBankTransactionsBankTransactionIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransactions', '/BankTransactions/:BankTransactionID/History', keyArgs] as const
}

export function getBankTransactionsBankTransactionIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransactionsBankTransactionIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransactions[':BankTransactionID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransactionsBankTransactionIDHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
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
                    (typeof client.BankTransactions)[':BankTransactionID']['History']['$get']
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
                    (typeof client.BankTransactions)[':BankTransactionID']['History']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransactionsBankTransactionIDHistoryQueryKey>
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
            ReturnType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransactionsBankTransactionIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransactionsBankTransactionIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransactions[':BankTransactionID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransactionsBankTransactionIDHistory<
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
                    (typeof client.BankTransactions)[':BankTransactionID']['History']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.BankTransactions)[':BankTransactionID']['History']['$put']
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
  const mutationDefaults = getPutBankTransactionsBankTransactionIDHistoryMutationOptions<
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

export function getBankTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransfers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransfers', '/BankTransfers', keyArgs] as const
}

export function getBankTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BankTransfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
          >,
          ReturnType<typeof getBankTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.BankTransfers.$put>,
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
  const mutationDefaults = getPutBankTransfersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBankTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BankTransfers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.BankTransfers.$post>,
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
  const mutationDefaults = getPostBankTransfersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBankTransfersBankTransferIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransfers', '/BankTransfers/:BankTransferID', keyArgs] as const
}

export function getBankTransfersBankTransferIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersBankTransferIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfersBankTransferID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBankTransfersBankTransferIDQueryKey>
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
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersBankTransferIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers[':BankTransferID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBankTransfersBankTransferID<
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
                Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>,
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
  const mutationDefaults = getPostBankTransfersBankTransferIDMutationOptions<
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

export function getBankTransfersBankTransferIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments', keyArgs] as const
}

export function getBankTransfersBankTransferIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfersBankTransferIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransfersBankTransferIDAttachmentsQueryKey>
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
            ReturnType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'BankTransfers',
    '/BankTransfers/:BankTransferID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfersBankTransferIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBankTransfersBankTransferIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransfers', '/BankTransfers/:BankTransferID/Attachments/:FileName', keyArgs] as const
}

export function getBankTransfersBankTransferIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfersBankTransferIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
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
                    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBankTransfersBankTransferIDAttachmentsFileNameQueryKey>
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
              (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersBankTransferIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransfersBankTransferIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
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

export function usePostBankTransfersBankTransferIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransfersBankTransferIDAttachmentsFileNameMutationOptions<
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

export function getBankTransfersBankTransferIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BankTransfers', '/BankTransfers/:BankTransferID/History', keyArgs] as const
}

export function getBankTransfersBankTransferIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankTransfersBankTransferIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BankTransfers[':BankTransferID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankTransfersBankTransferIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBankTransfersBankTransferIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankTransfersBankTransferIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankTransfersBankTransferIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BankTransfers[':BankTransferID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankTransfersBankTransferIDHistory<
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
                  ReturnType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>,
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
  const mutationDefaults = getPutBankTransfersBankTransferIDHistoryMutationOptions<
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

export function getBrandingThemesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BrandingThemes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BrandingThemes', '/BrandingThemes', keyArgs] as const
}

export function getBrandingThemesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BrandingThemes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandingThemesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BrandingThemes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BrandingThemes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
          >,
          ReturnType<typeof getBrandingThemesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BrandingThemes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandingThemesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BrandingThemes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrandingThemesBrandingThemeIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID', keyArgs] as const
}

export function getBrandingThemesBrandingThemeIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandingThemesBrandingThemeIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BrandingThemes[':BrandingThemeID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingThemesBrandingThemeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrandingThemesBrandingThemeIDQueryKey>
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
          Awaited<ReturnType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesBrandingThemeIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandingThemesBrandingThemeIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BrandingThemes[':BrandingThemeID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrandingThemesBrandingThemeIDPaymentServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['BrandingThemes', '/BrandingThemes/:BrandingThemeID/PaymentServices', keyArgs] as const
}

export function getBrandingThemesBrandingThemeIDPaymentServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandingThemesBrandingThemeIDPaymentServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingThemesBrandingThemeIDPaymentServices<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']>
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
                    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
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
                    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBrandingThemesBrandingThemeIDPaymentServicesQueryKey>
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
              (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingThemesBrandingThemeIDPaymentServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandingThemesBrandingThemeIDPaymentServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBrandingThemesBrandingThemeIDPaymentServices<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBrandingThemesBrandingThemeIDPaymentServicesMutationOptions<
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

export function getBudgetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Budgets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Budgets', '/Budgets', keyArgs] as const
}

export function getBudgetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Budgets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Budgets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Budgets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>
          >,
          ReturnType<typeof getBudgetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Budgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Budgets', '/Budgets/:BudgetID', keyArgs] as const
}

export function getBudgetsBudgetIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Budgets[':BudgetID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBudgetsBudgetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Budgets)[':BudgetID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Budgets[':BudgetID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Contacts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts', keyArgs] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Contacts.$put>,
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
  const mutationDefaults = getPutContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Contacts.$post>,
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
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsContactNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactNumber', keyArgs] as const
}

export function getContactsContactNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.Contacts)[':ContactNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID', keyArgs] as const
}

export function getContactsContactIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContactsContactID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsContactIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID/Attachments', keyArgs] as const
}

export function getContactsContactIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID/Attachments/:AttachmentID', keyArgs] as const
}

export function getContactsContactIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']>
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
                    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContactsContactIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID/Attachments/:FileName', keyArgs] as const
}

export function getContactsContactIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
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
                    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
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
                    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContactsContactIDAttachmentsFileNameQueryKey>
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
            ReturnType<(typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutContactsContactIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsContactIDAttachmentsFileNameMutationOptions<
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

export function usePostContactsContactIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsContactIDAttachmentsFileNameMutationOptions<
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

export function getContactsContactIDCISSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID/CISSettings', keyArgs] as const
}

export function getContactsContactIDCISSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDCISSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].CISSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactIDCISSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIDCISSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDCISSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDCISSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].CISSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsContactIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Contacts', '/Contacts/:ContactID/History', keyArgs] as const
}

export function getContactsContactIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Contacts[':ContactID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsContactIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Contacts)[':ContactID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Contacts[':ContactID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutContactsContactIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsContactIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ContactGroups.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ContactGroups', '/ContactGroups', keyArgs] as const
}

export function getContactGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ContactGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ContactGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ContactGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
          >,
          ReturnType<typeof getContactGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ContactGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutContactGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContactGroups.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.ContactGroups.$put>,
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
  const mutationDefaults = getPutContactGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactGroupsContactGroupIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ContactGroups', '/ContactGroups/:ContactGroupID', keyArgs] as const
}

export function getContactGroupsContactGroupIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactGroupsContactGroupIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ContactGroups[':ContactGroupID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactGroupsContactGroupID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactGroupsContactGroupIDQueryKey>
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
          Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactGroupsContactGroupIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactGroupsContactGroupIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ContactGroups[':ContactGroupID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContactGroupsContactGroupID<
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
                Awaited<ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>,
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
  const mutationDefaults = getPostContactGroupsContactGroupIDMutationOptions<
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

export function usePutContactGroupsContactGroupIDContacts<
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
                  ReturnType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>,
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
  const mutationDefaults = getPutContactGroupsContactGroupIDContactsMutationOptions<
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

export function useDeleteContactGroupsContactGroupIDContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactGroupsContactGroupIDContactsMutationOptions<
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

export function useDeleteContactGroupsContactGroupIDContactsContactID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactGroupsContactGroupIDContactsContactIDMutationOptions<
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

export function getCreditNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.CreditNotes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes', keyArgs] as const
}

export function getCreditNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.CreditNotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.CreditNotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>
          >,
          ReturnType<typeof getCreditNotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.CreditNotes.$put>,
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
  const mutationDefaults = getPutCreditNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreditNotes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.CreditNotes.$post>,
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
  const mutationDefaults = getPostCreditNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreditNotesCreditNoteIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID', keyArgs] as const
}

export function getCreditNotesCreditNoteIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDQueryKey>
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
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreditNotesCreditNoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditNotesCreditNoteIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreditNotesCreditNoteIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/Attachments/:FileName', keyArgs] as const
}

export function getCreditNotesCreditNoteIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
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
                    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
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
                    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey>
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
              (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCreditNotesCreditNoteIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
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

export function usePostCreditNotesCreditNoteIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditNotesCreditNoteIDAttachmentsFileNameMutationOptions<
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

export function getCreditNotesCreditNoteIDPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/pdf', keyArgs] as const
}

export function getCreditNotesCreditNoteIDPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCreditNotesCreditNoteIDAllocations<
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
                  ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>,
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
  const mutationDefaults = getPutCreditNotesCreditNoteIDAllocationsMutationOptions<
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

export function useDeleteCreditNotesCreditNoteIDAllocationsAllocationID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCreditNotesCreditNoteIDAllocationsAllocationIDMutationOptions<
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

export function getCreditNotesCreditNoteIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['CreditNotes', '/CreditNotes/:CreditNoteID/History', keyArgs] as const
}

export function getCreditNotesCreditNoteIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesCreditNoteIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CreditNotes[':CreditNoteID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesCreditNoteIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreditNotesCreditNoteIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesCreditNoteIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesCreditNoteIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CreditNotes[':CreditNoteID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCreditNotesCreditNoteIDHistory<
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
                Awaited<ReturnType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>,
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
  const mutationDefaults = getPutCreditNotesCreditNoteIDHistoryMutationOptions<
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

export function getCurrenciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Currencies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Currencies', '/Currencies', keyArgs] as const
}

export function getCurrenciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Currencies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Currencies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Currencies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>
          >,
          ReturnType<typeof getCurrenciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Currencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCurrencies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Currencies.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Currencies.$put>,
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
  const mutationDefaults = getPutCurrenciesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExpenseClaimsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ExpenseClaims.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ExpenseClaims', '/ExpenseClaims', keyArgs] as const
}

export function getExpenseClaimsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ExpenseClaims.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpenseClaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ExpenseClaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExpenseClaims<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ExpenseClaims.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
          >,
          ReturnType<typeof getExpenseClaimsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpenseClaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ExpenseClaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutExpenseClaims<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExpenseClaims.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.ExpenseClaims.$put>,
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
  const mutationDefaults = getPutExpenseClaimsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExpenseClaimsExpenseClaimIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID', keyArgs] as const
}

export function getExpenseClaimsExpenseClaimIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpenseClaimsExpenseClaimIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ExpenseClaims[':ExpenseClaimID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExpenseClaimsExpenseClaimID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExpenseClaimsExpenseClaimIDQueryKey>
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
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsExpenseClaimIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpenseClaimsExpenseClaimIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ExpenseClaims[':ExpenseClaimID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostExpenseClaimsExpenseClaimID<
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
                Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>,
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
  const mutationDefaults = getPostExpenseClaimsExpenseClaimIDMutationOptions<
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

export function getExpenseClaimsExpenseClaimIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ExpenseClaims', '/ExpenseClaims/:ExpenseClaimID/History', keyArgs] as const
}

export function getExpenseClaimsExpenseClaimIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpenseClaimsExpenseClaimIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ExpenseClaims[':ExpenseClaimID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExpenseClaimsExpenseClaimIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExpenseClaimsExpenseClaimIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpenseClaimsExpenseClaimIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpenseClaimsExpenseClaimIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ExpenseClaims[':ExpenseClaimID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutExpenseClaimsExpenseClaimIDHistory<
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
                  ReturnType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>,
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
  const mutationDefaults = getPutExpenseClaimsExpenseClaimIDHistoryMutationOptions<
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

export function getInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Invoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices', keyArgs] as const
}

export function getInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>
          >,
          ReturnType<typeof getInvoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Invoices.$put>,
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
  const mutationDefaults = getPutInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Invoices.$post>,
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
  const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID', keyArgs] as const
}

export function getInvoicesInvoiceIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoicesInvoiceID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvoicesInvoiceIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDPdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/pdf', keyArgs] as const
}

export function getInvoicesInvoiceIDPdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/Attachments', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:AttachmentID', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']>
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
                    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/Attachments/:FileName', keyArgs] as const
}

export function getInvoicesInvoiceIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
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
                    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
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
                    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDAttachmentsFileNameQueryKey>
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
            ReturnType<(typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutInvoicesInvoiceIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
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

export function usePostInvoicesInvoiceIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvoicesInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getInvoicesInvoiceIDOnlineInvoiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/OnlineInvoice', keyArgs] as const
}

export function getInvoicesInvoiceIDOnlineInvoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDOnlineInvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].OnlineInvoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDOnlineInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDOnlineInvoiceQueryKey>
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
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDOnlineInvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDOnlineInvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].OnlineInvoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoicesInvoiceIDEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvoicesInvoiceIDEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesInvoiceIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Invoices', '/Invoices/:InvoiceID/History', keyArgs] as const
}

export function getInvoicesInvoiceIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesInvoiceIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Invoices[':InvoiceID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesInvoiceIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesInvoiceIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesInvoiceIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesInvoiceIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Invoices[':InvoiceID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutInvoicesInvoiceIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvoicesInvoiceIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoiceRemindersSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.InvoiceReminders.Settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['InvoiceReminders', '/InvoiceReminders/Settings', keyArgs] as const
}

export function getInvoiceRemindersSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.InvoiceReminders.Settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoiceRemindersSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.InvoiceReminders.Settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoiceRemindersSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.InvoiceReminders.Settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>
              >
            >
          >,
          ReturnType<typeof getInvoiceRemindersSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.InvoiceReminders.Settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoiceRemindersSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoiceRemindersSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.InvoiceReminders.Settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Items', '/Items', keyArgs] as const
}

export function getItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
          ReturnType<typeof getItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$put>>>>>,
          TError,
          InferRequestType<typeof client.Items.$put>,
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
  const mutationDefaults = getPutItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$post>>>>>,
          TError,
          InferRequestType<typeof client.Items.$post>,
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
  const mutationDefaults = getPostItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getItemsItemIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Items', '/Items/:ItemID', keyArgs] as const
}

export function getItemsItemIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':ItemID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
            >
          >,
          ReturnType<typeof getItemsItemIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':ItemID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostItemsItemID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.Items)[':ItemID']['$post']>,
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
  const mutationDefaults = getPostItemsItemIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteItemsItemID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Items)[':ItemID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':ItemID']['$delete']>,
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
  const mutationDefaults = getDeleteItemsItemIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getItemsItemIDHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Items', '/Items/:ItemID/History', keyArgs] as const
}

export function getItemsItemIDHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':ItemID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':ItemID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':ItemID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutItemsItemIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutItemsItemIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJournalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Journals.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Journals', '/Journals', keyArgs] as const
}

export function getJournalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Journals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Journals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJournals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Journals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>
          >,
          ReturnType<typeof getJournalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Journals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJournalsJournalIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Journals', '/Journals/:JournalID', keyArgs] as const
}

export function getJournalsJournalIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJournalsJournalIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Journals[':JournalID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJournalsJournalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJournalsJournalIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalsJournalIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJournalsJournalIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Journals[':JournalID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJournalsJournalNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Journals', '/Journals/:JournalNumber', keyArgs] as const
}

export function getJournalsJournalNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJournalsJournalNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Journals[':JournalNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJournalsJournalNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJournalsJournalNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.Journals)[':JournalNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalsJournalNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJournalsJournalNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Journals[':JournalNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinkedTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LinkedTransactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LinkedTransactions', '/LinkedTransactions', keyArgs] as const
}

export function getLinkedTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LinkedTransactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinkedTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LinkedTransactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinkedTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LinkedTransactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>
            >
          >,
          ReturnType<typeof getLinkedTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinkedTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinkedTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LinkedTransactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLinkedTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LinkedTransactions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LinkedTransactions.$put>,
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
  const mutationDefaults = getPutLinkedTransactionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLinkedTransactionsLinkedTransactionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['LinkedTransactions', '/LinkedTransactions/:LinkedTransactionID', keyArgs] as const
}

export function getLinkedTransactionsLinkedTransactionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinkedTransactionsLinkedTransactionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LinkedTransactions[':LinkedTransactionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinkedTransactionsLinkedTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinkedTransactionsLinkedTransactionIDQueryKey>
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
          Awaited<ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinkedTransactionsLinkedTransactionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinkedTransactionsLinkedTransactionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LinkedTransactions[':LinkedTransactionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLinkedTransactionsLinkedTransactionID<
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
                  ReturnType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>,
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
  const mutationDefaults = getPostLinkedTransactionsLinkedTransactionIDMutationOptions<
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

export function useDeleteLinkedTransactionsLinkedTransactionID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>,
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
  const mutationDefaults = getDeleteLinkedTransactionsLinkedTransactionIDMutationOptions<
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

export function getManualJournalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ManualJournals.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ManualJournals', '/ManualJournals', keyArgs] as const
}

export function getManualJournalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ManualJournals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ManualJournals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
          >,
          ReturnType<typeof getManualJournalsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManualJournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.ManualJournals.$put>,
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
  const mutationDefaults = getPutManualJournalsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ManualJournals.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ManualJournals.$post>,
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
  const mutationDefaults = getPostManualJournalsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getManualJournalsManualJournalIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ManualJournals', '/ManualJournals/:ManualJournalID', keyArgs] as const
}

export function getManualJournalsManualJournalIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsManualJournalIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournalsManualJournalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManualJournalsManualJournalIDQueryKey>
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
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManualJournalsManualJournalIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals[':ManualJournalID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostManualJournalsManualJournalID<
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
                Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>,
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
  const mutationDefaults = getPostManualJournalsManualJournalIDMutationOptions<
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

export function getManualJournalsManualJournalIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/Attachments', keyArgs] as const
}

export function getManualJournalsManualJournalIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsManualJournalIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournalsManualJournalIDAttachments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManualJournalsManualJournalIDAttachmentsQueryKey>
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
            ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManualJournalsManualJournalIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournalsManualJournalIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManualJournalsManualJournalIDAttachmentsAttachmentIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getManualJournalsManualJournalIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'ManualJournals',
    '/ManualJournals/:ManualJournalID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getManualJournalsManualJournalIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsManualJournalIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournalsManualJournalIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
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
                    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManualJournalsManualJournalIDAttachmentsFileNameQueryKey>
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
              (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManualJournalsManualJournalIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutManualJournalsManualJournalIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
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

export function usePostManualJournalsManualJournalIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManualJournalsManualJournalIDAttachmentsFileNameMutationOptions<
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

export function getManualJournalsManualJournalIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ManualJournals', '/ManualJournals/:ManualJournalID/History', keyArgs] as const
}

export function getManualJournalsManualJournalIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManualJournalsManualJournalIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ManualJournals[':ManualJournalID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManualJournalsManualJournalIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getManualJournalsManualJournalIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManualJournalsManualJournalIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManualJournalsManualJournalIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ManualJournals[':ManualJournalID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutManualJournalsManualJournalIDHistory<
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
                  ReturnType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>,
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
  const mutationDefaults = getPutManualJournalsManualJournalIDHistoryMutationOptions<
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

export function getOrganisationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Organisation', '/Organisation', keyArgs] as const
}

export function getOrganisationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Organisation.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganisation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>
          >,
          ReturnType<typeof getOrganisationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrganisationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Organisation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.Actions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Organisation', '/Organisation/Actions', keyArgs] as const
}

export function getOrganisationActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.Actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Organisation.Actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Organisation.Actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>
            >
          >,
          ReturnType<typeof getOrganisationActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Organisation.Actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Organisation.Actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationOrganisationIDCISSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Organisation', '/Organisation/:OrganisationID/CISSettings', keyArgs] as const
}

export function getOrganisationOrganisationIDCISSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationOrganisationIDCISSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Organisation[':OrganisationID'].CISSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationOrganisationIDCISSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationOrganisationIDCISSettingsQueryKey>
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
            ReturnType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationOrganisationIDCISSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationOrganisationIDCISSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Organisation[':OrganisationID'].CISSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOverpaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Overpayments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Overpayments', '/Overpayments', keyArgs] as const
}

export function getOverpaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Overpayments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverpaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Overpayments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOverpayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Overpayments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>
          >,
          ReturnType<typeof getOverpaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Overpayments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverpaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Overpayments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOverpaymentsOverpaymentIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Overpayments', '/Overpayments/:OverpaymentID', keyArgs] as const
}

export function getOverpaymentsOverpaymentIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverpaymentsOverpaymentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Overpayments[':OverpaymentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOverpaymentsOverpaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOverpaymentsOverpaymentIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsOverpaymentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverpaymentsOverpaymentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Overpayments[':OverpaymentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOverpaymentsOverpaymentIDAllocations<
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
                  ReturnType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>,
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
  const mutationDefaults = getPutOverpaymentsOverpaymentIDAllocationsMutationOptions<
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

export function useDeleteOverpaymentsOverpaymentIDAllocationsAllocationID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOverpaymentsOverpaymentIDAllocationsAllocationIDMutationOptions<
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

export function getOverpaymentsOverpaymentIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Overpayments', '/Overpayments/:OverpaymentID/History', keyArgs] as const
}

export function getOverpaymentsOverpaymentIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverpaymentsOverpaymentIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Overpayments[':OverpaymentID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOverpaymentsOverpaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>
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
                  ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOverpaymentsOverpaymentIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverpaymentsOverpaymentIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverpaymentsOverpaymentIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Overpayments[':OverpaymentID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOverpaymentsOverpaymentIDHistory<
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
                  ReturnType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>,
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
  const mutationDefaults = getPutOverpaymentsOverpaymentIDHistoryMutationOptions<
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

export function getPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payments', '/Payments', keyArgs] as const
}

export function getPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>
          >,
          ReturnType<typeof getPaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Payments.$put>,
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
  const mutationDefaults = getPutPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Payments.$post>,
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
  const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentsPaymentIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payments', '/Payments/:PaymentID', keyArgs] as const
}

export function getPaymentsPaymentIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsPaymentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payments[':PaymentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsPaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentsPaymentIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsPaymentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payments[':PaymentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPaymentsPaymentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentsPaymentIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentsPaymentIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Payments', '/Payments/:PaymentID/History', keyArgs] as const
}

export function getPaymentsPaymentIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsPaymentIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Payments[':PaymentID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsPaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentsPaymentIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Payments)[':PaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsPaymentIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Payments[':PaymentID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPaymentsPaymentIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentsPaymentIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaymentServices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PaymentServices', '/PaymentServices', keyArgs] as const
}

export function getPaymentServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaymentServices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PaymentServices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PaymentServices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>
            >
          >,
          ReturnType<typeof getPaymentServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PaymentServices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPaymentServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PaymentServices.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PaymentServices.$put>,
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
  const mutationDefaults = getPutPaymentServicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPrepaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Prepayments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Prepayments', '/Prepayments', keyArgs] as const
}

export function getPrepaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Prepayments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrepaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Prepayments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrepayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Prepayments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>
          >,
          ReturnType<typeof getPrepaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Prepayments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrepaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Prepayments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrepaymentsPrepaymentIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Prepayments', '/Prepayments/:PrepaymentID', keyArgs] as const
}

export function getPrepaymentsPrepaymentIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrepaymentsPrepaymentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Prepayments[':PrepaymentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrepaymentsPrepaymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrepaymentsPrepaymentIDQueryKey>
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
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsPrepaymentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrepaymentsPrepaymentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Prepayments[':PrepaymentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPrepaymentsPrepaymentIDAllocations<
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
                  ReturnType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>,
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
  const mutationDefaults = getPutPrepaymentsPrepaymentIDAllocationsMutationOptions<
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

export function useDeletePrepaymentsPrepaymentIDAllocationsAllocationID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrepaymentsPrepaymentIDAllocationsAllocationIDMutationOptions<
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

export function getPrepaymentsPrepaymentIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Prepayments', '/Prepayments/:PrepaymentID/History', keyArgs] as const
}

export function getPrepaymentsPrepaymentIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrepaymentsPrepaymentIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Prepayments[':PrepaymentID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrepaymentsPrepaymentIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrepaymentsPrepaymentIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaymentsPrepaymentIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrepaymentsPrepaymentIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Prepayments[':PrepaymentID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPrepaymentsPrepaymentIDHistory<
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
                Awaited<ReturnType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>,
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
  const mutationDefaults = getPutPrepaymentsPrepaymentIDHistoryMutationOptions<
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

export function getPurchaseOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PurchaseOrders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders', keyArgs] as const
}

export function getPurchaseOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PurchaseOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.PurchaseOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
          >,
          ReturnType<typeof getPurchaseOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.PurchaseOrders.$put>,
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
  const mutationDefaults = getPutPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PurchaseOrders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PurchaseOrders.$post>,
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
  const mutationDefaults = getPostPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPurchaseOrdersPurchaseOrderIDPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/pdf', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>
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
                  ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseOrdersPurchaseOrderIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDQueryKey>
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
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPurchaseOrdersPurchaseOrderID<
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
                Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>,
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
  const mutationDefaults = getPostPurchaseOrdersPurchaseOrderIDMutationOptions<
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

export function getPurchaseOrdersPurchaseOrderNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderNumber', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseOrdersPurchaseOrderIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/History', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPurchaseOrdersPurchaseOrderIDHistory<
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
                  ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>,
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
  const mutationDefaults = getPutPurchaseOrdersPurchaseOrderIDHistoryMutationOptions<
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

export function getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['PurchaseOrders', '/PurchaseOrders/:PurchaseOrderID/Attachments', keyArgs] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderIDAttachments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey>
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
            ReturnType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'PurchaseOrders',
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePurchaseOrdersPurchaseOrderIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
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
                    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey>
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
              (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
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

export function usePostPurchaseOrdersPurchaseOrderIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPurchaseOrdersPurchaseOrderIDAttachmentsFileNameMutationOptions<
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

export function getQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Quotes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes', keyArgs] as const
}

export function getQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
          ReturnType<typeof getQuotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$put>>>>>,
          TError,
          InferRequestType<typeof client.Quotes.$put>,
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
  const mutationDefaults = getPutQuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Quotes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Quotes.$post>,
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
  const mutationDefaults = getPostQuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuotesQuoteIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID', keyArgs] as const
}

export function getQuotesQuoteIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
            >
          >,
          ReturnType<typeof getQuotesQuoteIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQuotesQuoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuotesQuoteIDHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID/History', keyArgs] as const
}

export function getQuotesQuoteIDHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutQuotesQuoteIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuotesQuoteIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuotesQuoteIDPdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID/pdf', keyArgs] as const
}

export function getQuotesQuoteIDPdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIDPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIDPdfQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesQuoteIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID/Attachments', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesQuoteIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:AttachmentID', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
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
                    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIDAttachmentsAttachmentIDQueryKey>
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
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesQuoteIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Quotes', '/Quotes/:QuoteID/Attachments/:FileName', keyArgs] as const
}

export function getQuotesQuoteIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Quotes[':QuoteID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIDAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIDAttachmentsFileNameQueryKey>
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
            ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Quotes[':QuoteID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutQuotesQuoteIDAttachmentsFileName<
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
                  ReturnType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>,
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
  const mutationDefaults = getPutQuotesQuoteIDAttachmentsFileNameMutationOptions<
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

export function usePostQuotesQuoteIDAttachmentsFileName<
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
                    (typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIDAttachmentsFileNameMutationOptions<
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

export function getReceiptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Receipts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts', keyArgs] as const
}

export function getReceiptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Receipts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Receipts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>
          >,
          ReturnType<typeof getReceiptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Receipts.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.Receipts.$put>,
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
  const mutationDefaults = getPutReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReceiptsReceiptIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts/:ReceiptID', keyArgs] as const
}

export function getReceiptsReceiptIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsReceiptIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts[':ReceiptID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceiptsReceiptID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReceiptsReceiptIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsReceiptIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts[':ReceiptID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReceiptsReceiptID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReceiptsReceiptIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReceiptsReceiptIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts/:ReceiptID/Attachments', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsReceiptIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceiptsReceiptIDAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReceiptsReceiptIDAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsReceiptIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts[':ReceiptID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:AttachmentID', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceiptsReceiptIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']>
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
                    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsReceiptIDAttachmentsAttachmentIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReceiptsReceiptIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts/:ReceiptID/Attachments/:FileName', keyArgs] as const
}

export function getReceiptsReceiptIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsReceiptIDAttachmentsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceiptsReceiptIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
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
                    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
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
                    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getReceiptsReceiptIDAttachmentsFileNameQueryKey>
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
            ReturnType<(typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsReceiptIDAttachmentsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutReceiptsReceiptIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReceiptsReceiptIDAttachmentsFileNameMutationOptions<
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

export function usePostReceiptsReceiptIDAttachmentsFileName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReceiptsReceiptIDAttachmentsFileNameMutationOptions<
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

export function getReceiptsReceiptIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Receipts', '/Receipts/:ReceiptID/History', keyArgs] as const
}

export function getReceiptsReceiptIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReceiptsReceiptIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Receipts[':ReceiptID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReceiptsReceiptIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReceiptsReceiptIDHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsReceiptIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReceiptsReceiptIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Receipts[':ReceiptID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutReceiptsReceiptIDHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReceiptsReceiptIDHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRepeatingInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.RepeatingInvoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['RepeatingInvoices', '/RepeatingInvoices', keyArgs] as const
}

export function getRepeatingInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.RepeatingInvoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepeatingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepeatingInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.RepeatingInvoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>
            >
          >,
          ReturnType<typeof getRepeatingInvoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepeatingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRepeatingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.RepeatingInvoices.$put>,
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
  const mutationDefaults = getPutRepeatingInvoicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostRepeatingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.RepeatingInvoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.RepeatingInvoices.$post>,
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
  const mutationDefaults = getPostRepeatingInvoicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRepeatingInvoicesRepeatingInvoiceIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID', keyArgs] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepeatingInvoicesRepeatingInvoiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>
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
                  ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDQueryKey>
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
          Awaited<ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRepeatingInvoicesRepeatingInvoiceID<
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
                  ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>,
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
  const mutationDefaults = getPostRepeatingInvoicesRepeatingInvoiceIDMutationOptions<
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

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepeatingInvoicesRepeatingInvoiceIDAttachments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey>
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
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:AttachmentID',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey>
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
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'RepeatingInvoices',
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName',
    keyArgs,
  ] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey>
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
              (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
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
    getPutRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
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

export function usePostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName<
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
    getPostRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameMutationOptions<
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

export function getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['RepeatingInvoices', '/RepeatingInvoices/:RepeatingInvoiceID/History', keyArgs] as const
}

export function getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepeatingInvoicesRepeatingInvoiceIDHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
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
                    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey>
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
            ReturnType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepeatingInvoicesRepeatingInvoiceIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRepeatingInvoicesRepeatingInvoiceIDHistory<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRepeatingInvoicesRepeatingInvoiceIDHistoryMutationOptions<
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

export function getReportsTenNinetyNineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TenNinetyNine.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/TenNinetyNine', keyArgs] as const
}

export function getReportsTenNinetyNineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TenNinetyNine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsTenNinetyNineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.TenNinetyNine.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsTenNinetyNine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TenNinetyNine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
            >
          >,
          ReturnType<typeof getReportsTenNinetyNineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TenNinetyNine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTenNinetyNineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsTenNinetyNineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.TenNinetyNine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsAgedPayablesByContactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/AgedPayablesByContact', keyArgs] as const
}

export function getReportsAgedPayablesByContactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsAgedPayablesByContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.AgedPayablesByContact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsAgedPayablesByContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>
              >
            >
          >,
          ReturnType<typeof getReportsAgedPayablesByContactQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedPayablesByContact.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsAgedPayablesByContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsAgedPayablesByContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.AgedPayablesByContact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsAgedReceivablesByContactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/AgedReceivablesByContact', keyArgs] as const
}

export function getReportsAgedReceivablesByContactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsAgedReceivablesByContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.AgedReceivablesByContact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsAgedReceivablesByContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
              >
            >
          >,
          ReturnType<typeof getReportsAgedReceivablesByContactQueryKey>
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
          Awaited<ReturnType<typeof client.Reports.AgedReceivablesByContact.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsAgedReceivablesByContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsAgedReceivablesByContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.AgedReceivablesByContact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsBalanceSheetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BalanceSheet.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/BalanceSheet', keyArgs] as const
}

export function getReportsBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BalanceSheet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsBalanceSheetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.BalanceSheet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsBalanceSheet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BalanceSheet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>
            >
          >,
          ReturnType<typeof getReportsBalanceSheetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BalanceSheet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBalanceSheetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsBalanceSheetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.BalanceSheet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsBankSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BankSummary.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/BankSummary', keyArgs] as const
}

export function getReportsBankSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BankSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsBankSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.BankSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsBankSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BankSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>
            >
          >,
          ReturnType<typeof getReportsBankSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BankSummary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBankSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsBankSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.BankSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsReportIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Reports)[':ReportID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/:ReportID', keyArgs] as const
}

export function getReportsReportIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Reports)[':ReportID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports[':ReportID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsReportID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Reports)[':ReportID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Reports)[':ReportID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports[':ReportID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsBudgetSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BudgetSummary.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/BudgetSummary', keyArgs] as const
}

export function getReportsBudgetSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BudgetSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsBudgetSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.BudgetSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsBudgetSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.BudgetSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
            >
          >,
          ReturnType<typeof getReportsBudgetSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.BudgetSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsBudgetSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsBudgetSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.BudgetSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsExecutiveSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ExecutiveSummary.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/ExecutiveSummary', keyArgs] as const
}

export function getReportsExecutiveSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ExecutiveSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsExecutiveSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.ExecutiveSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsExecutiveSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ExecutiveSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
            >
          >,
          ReturnType<typeof getReportsExecutiveSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ExecutiveSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsExecutiveSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsExecutiveSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.ExecutiveSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports', keyArgs] as const
}

export function getReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsProfitAndLossQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ProfitAndLoss.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/ProfitAndLoss', keyArgs] as const
}

export function getReportsProfitAndLossQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ProfitAndLoss.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsProfitAndLossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.ProfitAndLoss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsProfitAndLoss<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.ProfitAndLoss.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
            >
          >,
          ReturnType<typeof getReportsProfitAndLossQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Reports.ProfitAndLoss.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsProfitAndLossQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsProfitAndLossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.ProfitAndLoss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsTrialBalanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TrialBalance.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Reports', '/Reports/TrialBalance', keyArgs] as const
}

export function getReportsTrialBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TrialBalance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsTrialBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Reports.TrialBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsTrialBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Reports.TrialBalance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>
            >
          >,
          ReturnType<typeof getReportsTrialBalanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.TrialBalance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsTrialBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsTrialBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Reports.TrialBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSetup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Setup.$post>>>>>,
          TError,
          InferRequestType<typeof client.Setup.$post>,
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
  const mutationDefaults = getPostSetupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TaxRates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['TaxRates', '/TaxRates', keyArgs] as const
}

export function getTaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TaxRates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TaxRates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TaxRates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>
          >,
          ReturnType<typeof getTaxRatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.TaxRates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.TaxRates.$put>,
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
  const mutationDefaults = getPutTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TaxRates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TaxRates.$post>,
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
  const mutationDefaults = getPostTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaxRatesTaxTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['TaxRates', '/TaxRates/:TaxType', keyArgs] as const
}

export function getTaxRatesTaxTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRatesTaxTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TaxRates[':TaxType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxRatesTaxType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaxRatesTaxTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.TaxRates)[':TaxType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRatesTaxTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRatesTaxTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.TaxRates[':TaxType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrackingCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TrackingCategories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['TrackingCategories', '/TrackingCategories', keyArgs] as const
}

export function getTrackingCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TrackingCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TrackingCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.TrackingCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>
            >
          >,
          ReturnType<typeof getTrackingCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.TrackingCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTrackingCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.TrackingCategories.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.TrackingCategories.$put>,
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
  const mutationDefaults = getPutTrackingCategoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackingCategoriesTrackingCategoryIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['TrackingCategories', '/TrackingCategories/:TrackingCategoryID', keyArgs] as const
}

export function getTrackingCategoriesTrackingCategoryIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingCategoriesTrackingCategoryIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TrackingCategories[':TrackingCategoryID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingCategoriesTrackingCategoryID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>
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
                  ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTrackingCategoriesTrackingCategoryIDQueryKey>
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
          Awaited<ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingCategoriesTrackingCategoryIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingCategoriesTrackingCategoryIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.TrackingCategories[':TrackingCategoryID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTrackingCategoriesTrackingCategoryID<
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
                  ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>,
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
  const mutationDefaults = getPostTrackingCategoriesTrackingCategoryIDMutationOptions<
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

export function useDeleteTrackingCategoriesTrackingCategoryID<
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
                  ReturnType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>,
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
  const mutationDefaults = getDeleteTrackingCategoriesTrackingCategoryIDMutationOptions<
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

export function usePutTrackingCategoriesTrackingCategoryIDOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTrackingCategoriesTrackingCategoryIDOptionsMutationOptions<
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

export function usePostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
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
    getPostTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
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

export function useDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID<
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
    getDeleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDMutationOptions<
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Users', '/Users', keyArgs] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':UserID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Users', '/Users/:UserID', keyArgs] as const
}

export function getUsersUserIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':UserID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users[':UserID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':UserID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':UserID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Users[':UserID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
