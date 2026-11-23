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

export function getAccountingKey() {
  return ['accounting'] as const
}

export function getBrowserKey() {
  return ['browser'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getDictionariesKey() {
  return ['dictionaries'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getLicenseKey() {
  return ['license'] as const
}

export function getMacrosKey() {
  return ['macros'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getQuotesKey() {
  return ['quotes'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSubscriptionKey() {
  return ['subscription'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getAccountingCustomersInvoicesQueryKey(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
) {
  return ['accounting', '/accounting/customers/invoices', args] as const
}

export function getAccountingCustomersInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.customers.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesQueryKey>
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
      ...getAccountingCustomersInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingCustomersInvoicesMutationKey() {
  return ['accounting', '/accounting/customers/invoices', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.customers.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.customers.invoices.$post>) {
      return parseResponse(client.accounting.customers.invoices.$post(args, options))
    },
  })
}

export function createPostAccountingCustomersInvoices<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.$post>,
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
    const mutationDefaults = getPostAccountingCustomersInvoicesMutationOptions<
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

export function getPostAccountingCustomersInvoicesDocumentsMutationKey() {
  return ['accounting', '/accounting/customers/invoices/documents', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.customers.invoices.documents.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.customers.invoices.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.accounting.customers.invoices.documents.$post>,
    ) {
      return parseResponse(client.accounting.customers.invoices.documents.$post(args, options))
    },
  })
}

export function createPostAccountingCustomersInvoicesDocuments<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.documents.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.documents.$post>,
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
    const mutationDefaults = getPostAccountingCustomersInvoicesDocumentsMutationOptions<
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

export function getAccountingCustomersInvoicesIdsQueryKey(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
) {
  return ['accounting', '/accounting/customers/invoices/ids', args] as const
}

export function getAccountingCustomersInvoicesIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesIdsQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesIdsQueryKey>
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
      ...getAccountingCustomersInvoicesIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingCustomersInvoicesSendRemindersMutationKey() {
  return ['accounting', '/accounting/customers/invoices/sendReminders', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesSendRemindersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.customers.invoices.sendReminders.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesSendRemindersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>,
    ) {
      return parseResponse(client.accounting.customers.invoices.sendReminders.$post(args, options))
    },
  })
}

export function createPostAccountingCustomersInvoicesSendReminders<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.sendReminders.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>,
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
    const mutationDefaults = getPostAccountingCustomersInvoicesSendRemindersMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId', args] as const
}

export function getAccountingCustomersInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdQueryKey>
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
      ...getAccountingCustomersInvoicesInvoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountingCustomersInvoicesInvoiceIdMutationKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId', 'DELETE'] as const
}

export function getDeleteAccountingCustomersInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingCustomersInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.invoices)[':invoiceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountingCustomersInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.customers.invoices)[':invoiceId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingCustomersInvoicesInvoiceIdMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdDatesQueryKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/dates', args] as const
}

export function getAccountingCustomersInvoicesInvoiceIdDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDatesQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesInvoiceIdDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].dates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesInvoiceIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDatesQueryKey>
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
      ...getAccountingCustomersInvoicesInvoiceIdDatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/document', args] as const
}

export function getAccountingCustomersInvoicesInvoiceIdDocumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].document.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesInvoiceIdDocument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey>
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
      ...getAccountingCustomersInvoicesInvoiceIdDocumentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateMutationKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/duplicate', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesInvoiceIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].duplicate.$post(args, options),
      )
    },
  })
}

export function createPostAccountingCustomersInvoicesInvoiceIdDuplicate<
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
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
    const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdDuplicateMutationOptions<
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

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaMutationKey() {
  return [
    'accounting',
    '/accounting/customers/invoices/:invoiceId/duplicate/proForma',
    'POST',
  ] as const
}

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].duplicate.proForma.$post(args, options),
      )
    },
  })
}

export function createPostAccountingCustomersInvoicesInvoiceIdDuplicateProForma<
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
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
      getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/paymentTerms', args] as const
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesInvoiceIdPaymentTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey>
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
      ...getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/payments', args] as const
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey>
  >({
    queryKey: getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingCustomersInvoicesInvoiceIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey>
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
      ...getAccountingCustomersInvoicesInvoiceIdPaymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingCustomersInvoicesInvoiceIdPaymentsMutationKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/payments', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesInvoiceIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesInvoiceIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].payments.$post(args, options),
      )
    },
  })
}

export function createPostAccountingCustomersInvoicesInvoiceIdPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
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
    const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdPaymentsMutationOptions<
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

export function getPostAccountingCustomersInvoicesInvoiceIdSendReminderMutationKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/sendReminder', 'POST'] as const
}

export function getPostAccountingCustomersInvoicesInvoiceIdSendReminderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCustomersInvoicesInvoiceIdSendReminderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].sendReminder.$post(args, options),
      )
    },
  })
}

export function createPostAccountingCustomersInvoicesInvoiceIdSendReminder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
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
    const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdSendReminderMutationOptions<
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

export function getDeleteAccountingCustomersPaymentsPaymentIdMutationKey() {
  return ['accounting', '/accounting/customers/payments/:paymentId', 'DELETE'] as const
}

export function getDeleteAccountingCustomersPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounting.customers.payments)[':paymentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounting.customers.payments)[':paymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingCustomersPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.customers.payments)[':paymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounting.customers.payments[':paymentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountingCustomersPaymentsPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.customers.payments)[':paymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounting.customers.payments)[':paymentId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingCustomersPaymentsPaymentIdMutationOptions<
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

export function getAccountingProvidersInvoicesQueryKey(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
) {
  return ['accounting', '/accounting/providers/invoices', args] as const
}

export function getAccountingProvidersInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesQueryKey>
  >({
    queryKey: getAccountingProvidersInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.providers.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingProvidersInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.providers.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingProvidersInvoicesQueryKey>
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
      ...getAccountingProvidersInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingProvidersInvoicesMutationKey() {
  return ['accounting', '/accounting/providers/invoices', 'POST'] as const
}

export function getPostAccountingProvidersInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounting.providers.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingProvidersInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounting.providers.invoices.$post>) {
      return parseResponse(client.accounting.providers.invoices.$post(args, options))
    },
  })
}

export function createPostAccountingProvidersInvoices<
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
                Awaited<ReturnType<typeof client.accounting.providers.invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.providers.invoices.$post>,
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
    const mutationDefaults = getPostAccountingProvidersInvoicesMutationOptions<
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

export function getAccountingProvidersInvoicesIdsQueryKey(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
) {
  return ['accounting', '/accounting/providers/invoices/ids', args] as const
}

export function getAccountingProvidersInvoicesIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesIdsQueryKey>
  >({
    queryKey: getAccountingProvidersInvoicesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.providers.invoices.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingProvidersInvoicesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingProvidersInvoicesIdsQueryKey>
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
      ...getAccountingProvidersInvoicesIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountingProvidersInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId', args] as const
}

export function getAccountingProvidersInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getAccountingProvidersInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingProvidersInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdQueryKey>
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
      ...getAccountingProvidersInvoicesInvoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountingProvidersInvoicesInvoiceIdMutationKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId', 'DELETE'] as const
}

export function getDeleteAccountingProvidersInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingProvidersInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.providers.invoices)[':invoiceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountingProvidersInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.providers.invoices)[':invoiceId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingProvidersInvoicesInvoiceIdMutationOptions<
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

export function getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/document', args] as const
}

export function getAccountingProvidersInvoicesInvoiceIdDocumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey>
  >({
    queryKey: getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].document.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingProvidersInvoicesInvoiceIdDocument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey>
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
      ...getAccountingProvidersInvoicesInvoiceIdDocumentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/payments', args] as const
}

export function getAccountingProvidersInvoicesInvoiceIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey>
  >({
    queryKey: getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountingProvidersInvoicesInvoiceIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey>
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
      ...getAccountingProvidersInvoicesInvoiceIdPaymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountingProvidersInvoicesInvoiceIdPaymentsMutationKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/payments', 'POST'] as const
}

export function getPostAccountingProvidersInvoicesInvoiceIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingProvidersInvoicesInvoiceIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].payments.$post(args, options),
      )
    },
  })
}

export function createPostAccountingProvidersInvoicesInvoiceIdPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
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
    const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdPaymentsMutationOptions<
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

export function getPostAccountingProvidersInvoicesInvoiceIdSendMutationKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/send', 'POST'] as const
}

export function getPostAccountingProvidersInvoicesInvoiceIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingProvidersInvoicesInvoiceIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].send.$post(args, options),
      )
    },
  })
}

export function createPostAccountingProvidersInvoicesInvoiceIdSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
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
    const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdSendMutationOptions<
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

export function getPostAccountingProvidersInvoicesInvoiceIdStatusMutationKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/status', 'POST'] as const
}

export function getPostAccountingProvidersInvoicesInvoiceIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingProvidersInvoicesInvoiceIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
      >,
    ) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].status.$post(args, options),
      )
    },
  })
}

export function createPostAccountingProvidersInvoicesInvoiceIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
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
    const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdStatusMutationOptions<
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

export function getDeleteAccountingProvidersPaymentsPaymentIdMutationKey() {
  return ['accounting', '/accounting/providers/payments/:paymentId', 'DELETE'] as const
}

export function getDeleteAccountingProvidersPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounting.providers.payments)[':paymentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounting.providers.payments)[':paymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingProvidersPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounting.providers.payments)[':paymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounting.providers.payments[':paymentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountingProvidersPaymentsPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounting.providers.payments)[':paymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounting.providers.payments)[':paymentId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountingProvidersPaymentsPaymentIdMutationOptions<
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

export function getBrowserQueryKey(args: InferRequestType<typeof client.browser.$get>) {
  return ['browser', '/browser', args] as const
}

export function getBrowserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.browser.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrowserQueryKey>
  >({
    queryKey: getBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrowser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.browser.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserQueryKey>
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
    return { ...getBrowserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBrowserCsvQueryKey(args: InferRequestType<typeof client.browser.csv.$get>) {
  return ['browser', '/browser/csv', args] as const
}

export function getBrowserCsvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.browser.csv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrowserCsvQueryKey>
  >({
    queryKey: getBrowserCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.csv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrowserCsv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.browser.csv.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserCsvQueryKey>
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
    return { ...getBrowserCsvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBrowserViewsDetailsForClassNameQueryKey(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
) {
  return ['browser', '/browser/views/details/for/:className', args] as const
}

export function getBrowserViewsDetailsForClassNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsDetailsForClassNameQueryKey>
  >({
    queryKey: getBrowserViewsDetailsForClassNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views.details.for[':className'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsDetailsForClassName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsDetailsForClassNameQueryKey>
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
      ...getBrowserViewsDetailsForClassNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBrowserViewsDetailsForClassNameViewIdQueryKey(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
) {
  return ['browser', '/browser/views/details/for/:className/:viewId', args] as const
}

export function getBrowserViewsDetailsForClassNameViewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsDetailsForClassNameViewIdQueryKey>
  >({
    queryKey: getBrowserViewsDetailsForClassNameViewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views.details.for[':className'][':viewId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsDetailsForClassNameViewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
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
                    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsDetailsForClassNameViewIdQueryKey>
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
      ...getBrowserViewsDetailsForClassNameViewIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBrowserViewsDetailsForClassNameViewIdMutationKey() {
  return ['browser', '/browser/views/details/for/:className/:viewId', 'POST'] as const
}

export function getPostBrowserViewsDetailsForClassNameViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views.details.for)[':className'][':viewId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBrowserViewsDetailsForClassNameViewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.browser.views.details.for)[':className'][':viewId']['$post']
      >,
    ) {
      return parseResponse(
        client.browser.views.details.for[':className'][':viewId'].$post(args, options),
      )
    },
  })
}

export function createPostBrowserViewsDetailsForClassNameViewId<
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
                    (typeof client.browser.views.details.for)[':className'][':viewId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.browser.views.details.for)[':className'][':viewId']['$post']
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
    const mutationDefaults = getPostBrowserViewsDetailsForClassNameViewIdMutationOptions<
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

export function getBrowserViewsForClassNameQueryKey(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
) {
  return ['browser', '/browser/views/for/:className', args] as const
}

export function getBrowserViewsForClassNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsForClassNameQueryKey>
  >({
    queryKey: getBrowserViewsForClassNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views.for[':className'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsForClassName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsForClassNameQueryKey>
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
      ...getBrowserViewsForClassNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBrowserViewsForClassNameMutationKey() {
  return ['browser', '/browser/views/for/:className', 'POST'] as const
}

export function getPostBrowserViewsForClassNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views.for)[':className']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBrowserViewsForClassNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views.for)[':className']['$post']>,
    ) {
      return parseResponse(client.browser.views.for[':className'].$post(args, options))
    },
  })
}

export function createPostBrowserViewsForClassName<
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
                Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views.for)[':className']['$post']>,
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
    const mutationDefaults = getPostBrowserViewsForClassNameMutationOptions<
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

export function getBrowserViewsViewIdQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
) {
  return ['browser', '/browser/views/:viewId', args] as const
}

export function getBrowserViewsViewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdQueryKey>
  >({
    queryKey: getBrowserViewsViewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdQueryKey>
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
    return { ...getBrowserViewsViewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBrowserViewsViewIdMutationKey() {
  return ['browser', '/browser/views/:viewId', 'PUT'] as const
}

export function getPutBrowserViewsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.browser.views)[':viewId']['$put']>) {
      return parseResponse(client.browser.views[':viewId'].$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBrowserViewsViewIdMutationKey() {
  return ['browser', '/browser/views/:viewId', 'DELETE'] as const
}

export function getDeleteBrowserViewsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBrowserViewsViewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.browser.views)[':viewId']['$delete']>) {
      return parseResponse(client.browser.views[':viewId'].$delete(args, options))
    },
  })
}

export function createDeleteBrowserViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['$delete']>,
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
    const mutationDefaults = getDeleteBrowserViewsViewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBrowserViewsViewIdColumnsQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/columns', args] as const
}

export function getBrowserViewsViewIdColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdColumnsQueryKey>
  >({
    queryKey: getBrowserViewsViewIdColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].columns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdColumnsQueryKey>
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
      ...getBrowserViewsViewIdColumnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdColumnsMutationKey() {
  return ['browser', '/browser/views/:viewId/columns', 'PUT'] as const
}

export function getPutBrowserViewsViewIdColumnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdColumnsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].columns.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdColumns<
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
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdColumnsMutationOptions<
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

export function getDeleteBrowserViewsViewIdColumnsColumnNameMutationKey() {
  return ['browser', '/browser/views/:viewId/columns/:columnName', 'DELETE'] as const
}

export function getDeleteBrowserViewsViewIdColumnsColumnNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBrowserViewsViewIdColumnsColumnNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
      >,
    ) {
      return parseResponse(
        client.browser.views[':viewId'].columns[':columnName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteBrowserViewsViewIdColumnsColumnName<
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
                    (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
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
    const mutationDefaults = getDeleteBrowserViewsViewIdColumnsColumnNameMutationOptions<
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

export function getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
) {
  return ['browser', '/browser/views/:viewId/columns/:columnName/settings', args] as const
}

export function getBrowserViewsViewIdColumnsColumnNameSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey>
  >({
    queryKey: getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].columns[':columnName'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdColumnsColumnNameSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
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
                    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey>
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
      ...getBrowserViewsViewIdColumnsColumnNameSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdColumnsColumnNameSettingsMutationKey() {
  return ['browser', '/browser/views/:viewId/columns/:columnName/settings', 'PUT'] as const
}

export function getPutBrowserViewsViewIdColumnsColumnNameSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdColumnsColumnNameSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.browser.views[':viewId'].columns[':columnName'].settings.$put(args, options),
      )
    },
  })
}

export function createPutBrowserViewsViewIdColumnsColumnNameSettings<
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
                    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
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
    const mutationDefaults = getPutBrowserViewsViewIdColumnsColumnNameSettingsMutationOptions<
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

export function getBrowserViewsViewIdFilterQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/filter', args] as const
}

export function getBrowserViewsViewIdFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdFilterQueryKey>
  >({
    queryKey: getBrowserViewsViewIdFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdFilterQueryKey>
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
      ...getBrowserViewsViewIdFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdFilterMutationKey() {
  return ['browser', '/browser/views/:viewId/filter', 'PUT'] as const
}

export function getPutBrowserViewsViewIdFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].filter.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdFilterFilterPropertyMutationKey() {
  return ['browser', '/browser/views/:viewId/filter/:filterProperty', 'PUT'] as const
}

export function getPutBrowserViewsViewIdFilterFilterPropertyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdFilterFilterPropertyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
      >,
    ) {
      return parseResponse(
        client.browser.views[':viewId'].filter[':filterProperty'].$put(args, options),
      )
    },
  })
}

export function createPutBrowserViewsViewIdFilterFilterProperty<
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
                    (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
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
    const mutationDefaults = getPutBrowserViewsViewIdFilterFilterPropertyMutationOptions<
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

export function getBrowserViewsViewIdOrderQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/order', args] as const
}

export function getBrowserViewsViewIdOrderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdOrderQueryKey>
  >({
    queryKey: getBrowserViewsViewIdOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].order.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdOrderQueryKey>
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
      ...getBrowserViewsViewIdOrderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdOrderMutationKey() {
  return ['browser', '/browser/views/:viewId/order', 'PUT'] as const
}

export function getPutBrowserViewsViewIdOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].order.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBrowserViewsViewIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/permissions', args] as const
}

export function getBrowserViewsViewIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdPermissionsQueryKey>
  >({
    queryKey: getBrowserViewsViewIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdPermissionsQueryKey>
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
      ...getBrowserViewsViewIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdPermissionsMutationKey() {
  return ['browser', '/browser/views/:viewId/permissions', 'PUT'] as const
}

export function getPutBrowserViewsViewIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].permissions.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdPermissions<
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
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdPermissionsMutationOptions<
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

export function getBrowserViewsViewIdSettingsQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/settings', args] as const
}

export function getBrowserViewsViewIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdSettingsQueryKey>
  >({
    queryKey: getBrowserViewsViewIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdSettingsQueryKey>
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
      ...getBrowserViewsViewIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdSettingsMutationKey() {
  return ['browser', '/browser/views/:viewId/settings', 'PUT'] as const
}

export function getPutBrowserViewsViewIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].settings.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdSettings<
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
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdSettingsMutationOptions<
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

export function getBrowserViewsViewIdSettingsLocalQueryKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/settings/local', args] as const
}

export function getBrowserViewsViewIdSettingsLocalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdSettingsLocalQueryKey>
  >({
    queryKey: getBrowserViewsViewIdSettingsLocalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browser.views[':viewId'].settings.local.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrowserViewsViewIdSettingsLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.browser.views)[':viewId']['settings']['local']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBrowserViewsViewIdSettingsLocalQueryKey>
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
      ...getBrowserViewsViewIdSettingsLocalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBrowserViewsViewIdSettingsLocalMutationKey() {
  return ['browser', '/browser/views/:viewId/settings/local', 'PUT'] as const
}

export function getPutBrowserViewsViewIdSettingsLocalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBrowserViewsViewIdSettingsLocalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>,
    ) {
      return parseResponse(client.browser.views[':viewId'].settings.local.$put(args, options))
    },
  })
}

export function createPutBrowserViewsViewIdSettingsLocal<
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
                  ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>,
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
    const mutationDefaults = getPutBrowserViewsViewIdSettingsLocalMutationOptions<
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

export function getCustomersQueryKey(args: InferRequestType<typeof client.customers.$get>) {
  return ['customers', '/customers', args] as const
}

export function getCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >({
    queryKey: getCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersQueryKey>
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
    return { ...getCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomersMutationKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function getPostCustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    InferRequestType<typeof client.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.$post>) {
      return parseResponse(client.customers.$post(args, options))
    },
  })
}

export function createPostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
    const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersIdsQueryKey(args: InferRequestType<typeof client.customers.ids.$get>) {
  return ['customers', '/customers/ids', args] as const
}

export function getCustomersIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdsQueryKey>
  >({
    queryKey: getCustomersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdsQueryKey>
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
    return { ...getCustomersIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomersPersonsMutationKey() {
  return ['customers', '/customers/persons', 'POST'] as const
}

export function getPostCustomersPersonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.customers.persons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersPersonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.persons.$post>) {
      return parseResponse(client.customers.persons.$post(args, options))
    },
  })
}

export function createPostCustomersPersons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.customers.persons.$post>,
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
    const mutationDefaults = getPostCustomersPersonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCustomersPersonsAccessTokenMutationKey() {
  return ['customers', '/customers/persons/accessToken', 'POST'] as const
}

export function getPostCustomersPersonsAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.accessToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.customers.persons.accessToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersPersonsAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.persons.accessToken.$post>) {
      return parseResponse(client.customers.persons.accessToken.$post(args, options))
    },
  })
}

export function createPostCustomersPersonsAccessToken<
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
                Awaited<ReturnType<typeof client.customers.persons.accessToken.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.customers.persons.accessToken.$post>,
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
    const mutationDefaults = getPostCustomersPersonsAccessTokenMutationOptions<
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

export function getCustomersPersonsIdsQueryKey(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
) {
  return ['customers', '/customers/persons/ids', args] as const
}

export function getCustomersPersonsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsIdsQueryKey>
  >({
    queryKey: getCustomersPersonsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.persons.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomersPersonsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.persons.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersPersonsIdsQueryKey>
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
    return { ...getCustomersPersonsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCustomersPersonsPersonIdQueryKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
) {
  return ['customers', '/customers/persons/:personId', args] as const
}

export function getCustomersPersonsPersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdQueryKey>
  >({
    queryKey: getCustomersPersonsPersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.persons[':personId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersPersonsPersonIdQueryKey>
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
      ...getCustomersPersonsPersonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersPersonsPersonIdMutationKey() {
  return ['customers', '/customers/persons/:personId', 'PUT'] as const
}

export function getPutCustomersPersonsPersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers.persons)[':personId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersPersonsPersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers.persons)[':personId']['$put']>,
    ) {
      return parseResponse(client.customers.persons[':personId'].$put(args, options))
    },
  })
}

export function createPutCustomersPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['$put']>,
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
    const mutationDefaults = getPutCustomersPersonsPersonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustomersPersonsPersonIdMutationKey() {
  return ['customers', '/customers/persons/:personId', 'DELETE'] as const
}

export function getDeleteCustomersPersonsPersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.customers.persons)[':personId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersPersonsPersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers.persons)[':personId']['$delete']>,
    ) {
      return parseResponse(client.customers.persons[':personId'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersPersonsPersonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersPersonsPersonIdMutationOptions<
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

export function getCustomersPersonsPersonIdContactQueryKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
) {
  return ['customers', '/customers/persons/:personId/contact', args] as const
}

export function getCustomersPersonsPersonIdContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdContactQueryKey>
  >({
    queryKey: getCustomersPersonsPersonIdContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.persons[':personId'].contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersPersonsPersonIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersPersonsPersonIdContactQueryKey>
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
      ...getCustomersPersonsPersonIdContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersPersonsPersonIdContactMutationKey() {
  return ['customers', '/customers/persons/:personId/contact', 'PUT'] as const
}

export function getPutCustomersPersonsPersonIdContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersPersonsPersonIdContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>,
    ) {
      return parseResponse(client.customers.persons[':personId'].contact.$put(args, options))
    },
  })
}

export function createPutCustomersPersonsPersonIdContact<
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
                  ReturnType<(typeof client.customers.persons)[':personId']['contact']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>,
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
    const mutationDefaults = getPutCustomersPersonsPersonIdContactMutationOptions<
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

export function getCustomersPersonsPersonIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
) {
  return ['customers', '/customers/persons/:personId/customFields', args] as const
}

export function getCustomersPersonsPersonIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdCustomFieldsQueryKey>
  >({
    queryKey: getCustomersPersonsPersonIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.persons[':personId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersPersonsPersonIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers.persons)[':personId']['customFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersPersonsPersonIdCustomFieldsQueryKey>
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
      ...getCustomersPersonsPersonIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersPersonsPersonIdCustomFieldsMutationKey() {
  return ['customers', '/customers/persons/:personId/customFields', 'PUT'] as const
}

export function getPutCustomersPersonsPersonIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersPersonsPersonIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers.persons)[':personId']['customFields']['$put']
      >,
    ) {
      return parseResponse(client.customers.persons[':personId'].customFields.$put(args, options))
    },
  })
}

export function createPutCustomersPersonsPersonIdCustomFields<
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
                  ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$put']>,
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
    const mutationDefaults = getPutCustomersPersonsPersonIdCustomFieldsMutationOptions<
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

export function getDeleteCustomersPriceListsPriceListIdMutationKey() {
  return ['customers', '/customers/priceLists/:priceListId', 'DELETE'] as const
}

export function getDeleteCustomersPriceListsPriceListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.priceLists)[':priceListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersPriceListsPriceListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>,
    ) {
      return parseResponse(client.customers.priceLists[':priceListId'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersPriceListsPriceListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.customers.priceLists)[':priceListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersPriceListsPriceListIdMutationOptions<
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

export function getCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
) {
  return ['customers', '/customers/:customerId', args] as const
}

export function getCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdQueryKey>
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
    return { ...getCustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCustomersCustomerIdMutationKey() {
  return ['customers', '/customers/:customerId', 'PUT'] as const
}

export function getPutCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':customerId']['$put']>) {
      return parseResponse(client.customers[':customerId'].$put(args, options))
    },
  })
}

export function createPutCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustomersCustomerIdMutationKey() {
  return ['customers', '/customers/:customerId', 'DELETE'] as const
}

export function getDeleteCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':customerId']['$delete']>) {
      return parseResponse(client.customers[':customerId'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.customers)[':customerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersCustomerIdAddressQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
) {
  return ['customers', '/customers/:customerId/address', args] as const
}

export function getCustomersCustomerIdAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressQueryKey>
  >({
    queryKey: getCustomersCustomerIdAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].address.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdAddressQueryKey>
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
      ...getCustomersCustomerIdAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdAddressMutationKey() {
  return ['customers', '/customers/:customerId/address', 'PUT'] as const
}

export function getPutCustomersCustomerIdAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customerId']['address']['$put']>,
    ) {
      return parseResponse(client.customers[':customerId'].address.$put(args, options))
    },
  })
}

export function createPutCustomersCustomerIdAddress<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['address']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdAddressMutationOptions<
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

export function getCustomersCustomerIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
) {
  return ['customers', '/customers/:customerId/categories', args] as const
}

export function getCustomersCustomerIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCategoriesQueryKey>
  >({
    queryKey: getCustomersCustomerIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdCategoriesQueryKey>
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
      ...getCustomersCustomerIdCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdCategoriesMutationKey() {
  return ['customers', '/customers/:customerId/categories', 'PUT'] as const
}

export function getPutCustomersCustomerIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>,
    ) {
      return parseResponse(client.customers[':customerId'].categories.$put(args, options))
    },
  })
}

export function createPutCustomersCustomerIdCategories<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdCategoriesMutationOptions<
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

export function getCustomersCustomerIdContactQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
) {
  return ['customers', '/customers/:customerId/contact', args] as const
}

export function getCustomersCustomerIdContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdContactQueryKey>
  >({
    queryKey: getCustomersCustomerIdContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdContactQueryKey>
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
      ...getCustomersCustomerIdContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdContactMutationKey() {
  return ['customers', '/customers/:customerId/contact', 'PUT'] as const
}

export function getPutCustomersCustomerIdContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']>,
    ) {
      return parseResponse(client.customers[':customerId'].contact.$put(args, options))
    },
  })
}

export function createPutCustomersCustomerIdContact<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdContactMutationOptions<
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

export function getCustomersCustomerIdCorrespondenceAddressQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
) {
  return ['customers', '/customers/:customerId/correspondenceAddress', args] as const
}

export function getCustomersCustomerIdCorrespondenceAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCorrespondenceAddressQueryKey>
  >({
    queryKey: getCustomersCustomerIdCorrespondenceAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].correspondenceAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdCorrespondenceAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':customerId']['correspondenceAddress']['$get']
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
                    (typeof client.customers)[':customerId']['correspondenceAddress']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdCorrespondenceAddressQueryKey>
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
      ...getCustomersCustomerIdCorrespondenceAddressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdCorrespondenceAddressMutationKey() {
  return ['customers', '/customers/:customerId/correspondenceAddress', 'PUT'] as const
}

export function getPutCustomersCustomerIdCorrespondenceAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdCorrespondenceAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':customerId']['correspondenceAddress']['$put']
      >,
    ) {
      return parseResponse(
        client.customers[':customerId'].correspondenceAddress.$put(args, options),
      )
    },
  })
}

export function createPutCustomersCustomerIdCorrespondenceAddress<
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
                    (typeof client.customers)[':customerId']['correspondenceAddress']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':customerId']['correspondenceAddress']['$put']
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
    const mutationDefaults = getPutCustomersCustomerIdCorrespondenceAddressMutationOptions<
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

export function getCustomersCustomerIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
) {
  return ['customers', '/customers/:customerId/customFields', args] as const
}

export function getCustomersCustomerIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCustomFieldsQueryKey>
  >({
    queryKey: getCustomersCustomerIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdCustomFieldsQueryKey>
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
      ...getCustomersCustomerIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdCustomFieldsMutationKey() {
  return ['customers', '/customers/:customerId/customFields', 'PUT'] as const
}

export function getPutCustomersCustomerIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>,
    ) {
      return parseResponse(client.customers[':customerId'].customFields.$put(args, options))
    },
  })
}

export function createPutCustomersCustomerIdCustomFields<
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
                  ReturnType<(typeof client.customers)[':customerId']['customFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdCustomFieldsMutationOptions<
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

export function getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
) {
  return ['customers', '/customers/:customerId/customFields/:customFieldKey', args] as const
}

export function getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey>
  >({
    queryKey: getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].customFields[':customFieldKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdCustomFieldsCustomFieldKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
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
                    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey>
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
      ...getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdCustomFieldsCustomFieldKeyMutationKey() {
  return ['customers', '/customers/:customerId/customFields/:customFieldKey', 'PUT'] as const
}

export function getPutCustomersCustomerIdCustomFieldsCustomFieldKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdCustomFieldsCustomFieldKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
      >,
    ) {
      return parseResponse(
        client.customers[':customerId'].customFields[':customFieldKey'].$put(args, options),
      )
    },
  })
}

export function createPutCustomersCustomerIdCustomFieldsCustomFieldKey<
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
                    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
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
    const mutationDefaults = getPutCustomersCustomerIdCustomFieldsCustomFieldKeyMutationOptions<
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

export function getCustomersCustomerIdIndustriesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
) {
  return ['customers', '/customers/:customerId/industries', args] as const
}

export function getCustomersCustomerIdIndustriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdIndustriesQueryKey>
  >({
    queryKey: getCustomersCustomerIdIndustriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customerId'].industries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdIndustries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdIndustriesQueryKey>
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
      ...getCustomersCustomerIdIndustriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersCustomerIdIndustriesMutationKey() {
  return ['customers', '/customers/:customerId/industries', 'PUT'] as const
}

export function getPutCustomersCustomerIdIndustriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersCustomerIdIndustriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>,
    ) {
      return parseResponse(client.customers[':customerId'].industries.$put(args, options))
    },
  })
}

export function createPutCustomersCustomerIdIndustries<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>,
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
    const mutationDefaults = getPutCustomersCustomerIdIndustriesMutationOptions<
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

export function getDictionariesActiveQueryKey() {
  return ['dictionaries', '/dictionaries/active'] as const
}

export function getDictionariesActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesActiveQueryKey>
  >({
    queryKey: getDictionariesActiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries.active.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDictionariesActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesActiveQueryKey>
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
    return { ...getDictionariesActiveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDictionariesAllQueryKey() {
  return ['dictionaries', '/dictionaries/all'] as const
}

export function getDictionariesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesAllQueryKey>
  >({
    queryKey: getDictionariesAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDictionariesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesAllQueryKey>
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
    return { ...getDictionariesAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDictionariesCurrencyIsoCodeExchangeRateQueryKey(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
) {
  return ['dictionaries', '/dictionaries/currency/:isoCode/exchangeRate', args] as const
}

export function getDictionariesCurrencyIsoCodeExchangeRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesCurrencyIsoCodeExchangeRateQueryKey>
  >({
    queryKey: getDictionariesCurrencyIsoCodeExchangeRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries.currency[':isoCode'].exchangeRate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDictionariesCurrencyIsoCodeExchangeRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']
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
                    (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesCurrencyIsoCodeExchangeRateQueryKey>
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
      ...getDictionariesCurrencyIsoCodeExchangeRateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDictionariesCurrencyIsoCodeExchangeRateMutationKey() {
  return ['dictionaries', '/dictionaries/currency/:isoCode/exchangeRate', 'POST'] as const
}

export function getPostDictionariesCurrencyIsoCodeExchangeRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDictionariesCurrencyIsoCodeExchangeRateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']
      >,
    ) {
      return parseResponse(
        client.dictionaries.currency[':isoCode'].exchangeRate.$post(args, options),
      )
    },
  })
}

export function createPostDictionariesCurrencyIsoCodeExchangeRate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']
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
    const mutationDefaults = getPostDictionariesCurrencyIsoCodeExchangeRateMutationOptions<
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

export function getDictionariesTypeActiveQueryKey(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/active', args] as const
}

export function getDictionariesTypeActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeActiveQueryKey>
  >({
    queryKey: getDictionariesTypeActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries[':type'].active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDictionariesTypeActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesTypeActiveQueryKey>
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
      ...getDictionariesTypeActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDictionariesTypeAllQueryKey(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/all', args] as const
}

export function getDictionariesTypeAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeAllQueryKey>
  >({
    queryKey: getDictionariesTypeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries[':type'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDictionariesTypeAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesTypeAllQueryKey>
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
    return { ...getDictionariesTypeAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDictionariesTypeIdQueryKey(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/:id', args] as const
}

export function getDictionariesTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeIdQueryKey>
  >({
    queryKey: getDictionariesTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dictionaries[':type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDictionariesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDictionariesTypeIdQueryKey>
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
    return { ...getDictionariesTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function createPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
) {
  return ['jobs', '/jobs/:jobId', args] as const
}

export function getJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >({
    queryKey: getJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdQueryKey>
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
    return { ...getJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutJobsJobIdDatesMutationKey() {
  return ['jobs', '/jobs/:jobId/dates', 'PUT'] as const
}

export function getPutJobsJobIdDatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['dates']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdDatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']>) {
      return parseResponse(client.jobs[':jobId'].dates.$put(args, options))
    },
  })
}

export function createPutJobsJobIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.jobs)[':jobId']['dates']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']>,
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
    const mutationDefaults = getPutJobsJobIdDatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobsJobIdFilesQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
) {
  return ['jobs', '/jobs/:jobId/files', args] as const
}

export function getJobsJobIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdFilesQueryKey>
  >({
    queryKey: getJobsJobIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdFilesQueryKey>
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
    return { ...getJobsJobIdFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostJobsJobIdFilesOutputMutationKey() {
  return ['jobs', '/jobs/:jobId/files/output', 'POST'] as const
}

export function getPostJobsJobIdFilesOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['output']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsJobIdFilesOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']>,
    ) {
      return parseResponse(client.jobs[':jobId'].files.output.$post(args, options))
    },
  })
}

export function createPostJobsJobIdFilesOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['output']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']>,
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
    const mutationDefaults = getPostJobsJobIdFilesOutputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobsJobIdFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
) {
  return ['jobs', '/jobs/:jobId/files/:fileId', args] as const
}

export function getJobsJobIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdFilesFileIdQueryKey>
  >({
    queryKey: getJobsJobIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJobsJobIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdFilesFileIdQueryKey>
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
      ...getJobsJobIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutJobsJobIdInstructionsMutationKey() {
  return ['jobs', '/jobs/:jobId/instructions', 'PUT'] as const
}

export function getPutJobsJobIdInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['instructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']>,
    ) {
      return parseResponse(client.jobs[':jobId'].instructions.$put(args, options))
    },
  })
}

export function createPutJobsJobIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.jobs)[':jobId']['instructions']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']>,
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
    const mutationDefaults = getPutJobsJobIdInstructionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutJobsJobIdStatusMutationKey() {
  return ['jobs', '/jobs/:jobId/status', 'PUT'] as const
}

export function getPutJobsJobIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']>) {
      return parseResponse(client.jobs[':jobId'].status.$put(args, options))
    },
  })
}

export function createPutJobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']>,
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
    const mutationDefaults = getPutJobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutJobsJobIdVendorMutationKey() {
  return ['jobs', '/jobs/:jobId/vendor', 'PUT'] as const
}

export function getPutJobsJobIdVendorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['vendor']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdVendorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']>) {
      return parseResponse(client.jobs[':jobId'].vendor.$put(args, options))
    },
  })
}

export function createPutJobsJobIdVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.jobs)[':jobId']['vendor']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']>,
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
    const mutationDefaults = getPutJobsJobIdVendorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLicenseQueryKey() {
  return ['license', '/license'] as const
}

export function getLicenseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseQueryKey>
  >({
    queryKey: getLicenseQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLicenseQueryKey>
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
    return { ...getLicenseQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLicenseRefreshMutationKey() {
  return ['license', '/license/refresh', 'POST'] as const
}

export function getPostLicenseRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.refresh.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.license.refresh.$post(undefined, options))
    },
  })
}

export function createPostLicenseRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.license.refresh.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
    const mutationDefaults = getPostLicenseRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMacrosMacroIdRunMutationKey() {
  return ['macros', '/macros/:macroId/run', 'POST'] as const
}

export function getPostMacrosMacroIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.macros)[':macroId']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.macros)[':macroId']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMacrosMacroIdRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.macros)[':macroId']['run']['$post']>) {
      return parseResponse(client.macros[':macroId'].run.$post(args, options))
    },
  })
}

export function createPostMacrosMacroIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.macros)[':macroId']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.macros)[':macroId']['run']['$post']>,
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
    const mutationDefaults = getPostMacrosMacroIdRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsFilesFileIdDownloadQueryKey(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
) {
  return ['projects', '/projects/files/:fileId/download', args] as const
}

export function getProjectsFilesFileIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsFilesFileIdDownloadQueryKey>
  >({
    queryKey: getProjectsFilesFileIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.files[':fileId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsFilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsFilesFileIdDownloadQueryKey>
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
      ...getProjectsFilesFileIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdsQueryKey(args: InferRequestType<typeof client.projects.ids.$get>) {
  return ['projects', '/projects/ids', args] as const
}

export function getProjectsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsIdsQueryKey>
  >({
    queryKey: getProjectsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsIdsQueryKey>
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
    return { ...getProjectsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  return ['projects', '/projects/:projectId', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>) {
      return parseResponse(client.projects[':projectId'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
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
    const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdContactsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
) {
  return ['projects', '/projects/:projectId/contacts', args] as const
}

export function getProjectsProjectIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdContactsQueryKey>
  >({
    queryKey: getProjectsProjectIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdContactsQueryKey>
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
      ...getProjectsProjectIdContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdContactsMutationKey() {
  return ['projects', '/projects/:projectId/contacts', 'PUT'] as const
}

export function getPutProjectsProjectIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']>,
    ) {
      return parseResponse(client.projects[':projectId'].contacts.$put(args, options))
    },
  })
}

export function createPutProjectsProjectIdContacts<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectIdContactsMutationOptions<
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

export function getProjectsProjectIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
) {
  return ['projects', '/projects/:projectId/customFields', args] as const
}

export function getProjectsProjectIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdCustomFieldsQueryKey>
  >({
    queryKey: getProjectsProjectIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdCustomFieldsQueryKey>
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
      ...getProjectsProjectIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdCustomFieldsMutationKey() {
  return ['projects', '/projects/:projectId/customFields', 'PUT'] as const
}

export function getPutProjectsProjectIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>,
    ) {
      return parseResponse(client.projects[':projectId'].customFields.$put(args, options))
    },
  })
}

export function createPutProjectsProjectIdCustomFields<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectIdCustomFieldsMutationOptions<
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

export function getProjectsProjectIdDatesQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
) {
  return ['projects', '/projects/:projectId/dates', args] as const
}

export function getProjectsProjectIdDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatesQueryKey>
  >({
    queryKey: getProjectsProjectIdDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].dates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdDatesQueryKey>
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
      ...getProjectsProjectIdDatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdDatesMutationKey() {
  return ['projects', '/projects/:projectId/dates', 'PUT'] as const
}

export function getPutProjectsProjectIdDatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdDatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']>,
    ) {
      return parseResponse(client.projects[':projectId'].dates.$put(args, options))
    },
  })
}

export function createPutProjectsProjectIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectIdDatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdFinanceQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
) {
  return ['projects', '/projects/:projectId/finance', args] as const
}

export function getProjectsProjectIdFinanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdFinanceQueryKey>
  >({
    queryKey: getProjectsProjectIdFinanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].finance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdFinanceQueryKey>
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
      ...getProjectsProjectIdFinanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdFinancePayablesMutationKey() {
  return ['projects', '/projects/:projectId/finance/payables', 'POST'] as const
}

export function getPostProjectsProjectIdFinancePayablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdFinancePayablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['payables']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].finance.payables.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdFinancePayables<
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
                  ReturnType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdFinancePayablesMutationOptions<
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

export function getPutProjectsProjectIdFinancePayablesPayableIdMutationKey() {
  return ['projects', '/projects/:projectId/finance/payables/:payableId', 'PUT'] as const
}

export function getPutProjectsProjectIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].finance.payables[':payableId'].$put(args, options),
      )
    },
  })
}

export function createPutProjectsProjectIdFinancePayablesPayableId<
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
                    (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
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
    const mutationDefaults = getPutProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function getDeleteProjectsProjectIdFinancePayablesPayableIdMutationKey() {
  return ['projects', '/projects/:projectId/finance/payables/:payableId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].finance.payables[':payableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsProjectIdFinancePayablesPayableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
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
    const mutationDefaults = getDeleteProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function getPostProjectsProjectIdFinanceReceivablesMutationKey() {
  return ['projects', '/projects/:projectId/finance/receivables', 'POST'] as const
}

export function getPostProjectsProjectIdFinanceReceivablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['finance']['receivables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['finance']['receivables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdFinanceReceivablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['receivables']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].finance.receivables.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdFinanceReceivables<
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
                    (typeof client.projects)[':projectId']['finance']['receivables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['finance']['receivables']['$post']
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
    const mutationDefaults = getPostProjectsProjectIdFinanceReceivablesMutationOptions<
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

export function getPutProjectsProjectIdFinanceReceivablesReceivableIdMutationKey() {
  return ['projects', '/projects/:projectId/finance/receivables/:receivableId', 'PUT'] as const
}

export function getPutProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].finance.receivables[':receivableId'].$put(args, options),
      )
    },
  })
}

export function createPutProjectsProjectIdFinanceReceivablesReceivableId<
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
                    (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
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
    const mutationDefaults = getPutProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getDeleteProjectsProjectIdFinanceReceivablesReceivableIdMutationKey() {
  return ['projects', '/projects/:projectId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].finance.receivables[':receivableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsProjectIdFinanceReceivablesReceivableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
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
      getDeleteProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getProjectsProjectIdInstructionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
) {
  return ['projects', '/projects/:projectId/instructions', args] as const
}

export function getProjectsProjectIdInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdInstructionsQueryKey>
  >({
    queryKey: getProjectsProjectIdInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].instructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsProjectIdInstructionsQueryKey>
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
      ...getProjectsProjectIdInstructionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdInstructionsMutationKey() {
  return ['projects', '/projects/:projectId/instructions', 'PUT'] as const
}

export function getPutProjectsProjectIdInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>,
    ) {
      return parseResponse(client.projects[':projectId'].instructions.$put(args, options))
    },
  })
}

export function createPutProjectsProjectIdInstructions<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectIdInstructionsMutationOptions<
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

export function getPostProjectsProjectIdLanguageCombinationsMutationKey() {
  return ['projects', '/projects/:projectId/languageCombinations', 'POST'] as const
}

export function getPostProjectsProjectIdLanguageCombinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdLanguageCombinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['languageCombinations']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].languageCombinations.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdLanguageCombinations<
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
                    (typeof client.projects)[':projectId']['languageCombinations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdLanguageCombinationsMutationOptions<
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

export function getPostProjectsProjectIdTasksMutationKey() {
  return ['projects', '/projects/:projectId/tasks', 'POST'] as const
}

export function getPostProjectsProjectIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].tasks.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['tasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvidersIdsQueryKey(args: InferRequestType<typeof client.providers.ids.$get>) {
  return ['providers', '/providers/ids', args] as const
}

export function getProvidersIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.providers.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdsQueryKey>
  >({
    queryKey: getProvidersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProvidersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.providers.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersIdsQueryKey>
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
    return { ...getProvidersIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProvidersPersonsIdsQueryKey(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
) {
  return ['providers', '/providers/persons/ids', args] as const
}

export function getProvidersPersonsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsIdsQueryKey>
  >({
    queryKey: getProvidersPersonsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.persons.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProvidersPersonsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.providers.persons.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersPersonsIdsQueryKey>
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
    return { ...getProvidersPersonsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProvidersPersonsPersonIdQueryKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
) {
  return ['providers', '/providers/persons/:personId', args] as const
}

export function getProvidersPersonsPersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdQueryKey>
  >({
    queryKey: getProvidersPersonsPersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.persons[':personId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersPersonsPersonIdQueryKey>
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
      ...getProvidersPersonsPersonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteProvidersPersonsPersonIdMutationKey() {
  return ['providers', '/providers/persons/:personId', 'DELETE'] as const
}

export function getDeleteProvidersPersonsPersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.providers.persons)[':personId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProvidersPersonsPersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.providers.persons)[':personId']['$delete']>,
    ) {
      return parseResponse(client.providers.persons[':personId'].$delete(args, options))
    },
  })
}

export function createDeleteProvidersPersonsPersonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.providers.persons)[':personId']['$delete']>,
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
    const mutationDefaults = getDeleteProvidersPersonsPersonIdMutationOptions<
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

export function getProvidersPersonsPersonIdContactQueryKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
) {
  return ['providers', '/providers/persons/:personId/contact', args] as const
}

export function getProvidersPersonsPersonIdContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdContactQueryKey>
  >({
    queryKey: getProvidersPersonsPersonIdContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.persons[':personId'].contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersPersonsPersonIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersPersonsPersonIdContactQueryKey>
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
      ...getProvidersPersonsPersonIdContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProvidersPersonsPersonIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
) {
  return ['providers', '/providers/persons/:personId/customFields', args] as const
}

export function getProvidersPersonsPersonIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdCustomFieldsQueryKey>
  >({
    queryKey: getProvidersPersonsPersonIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.persons[':personId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersPersonsPersonIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.providers.persons)[':personId']['customFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersPersonsPersonIdCustomFieldsQueryKey>
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
      ...getProvidersPersonsPersonIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProvidersPersonsPersonIdNotificationInvitationMutationKey() {
  return ['providers', '/providers/persons/:personId/notification/invitation', 'POST'] as const
}

export function getPostProvidersPersonsPersonIdNotificationInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProvidersPersonsPersonIdNotificationInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
      >,
    ) {
      return parseResponse(
        client.providers.persons[':personId'].notification.invitation.$post(args, options),
      )
    },
  })
}

export function createPostProvidersPersonsPersonIdNotificationInvitation<
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
                    (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
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
    const mutationDefaults = getPostProvidersPersonsPersonIdNotificationInvitationMutationOptions<
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

export function getDeleteProvidersPriceListsPriceListIdMutationKey() {
  return ['providers', '/providers/priceLists/:priceListId', 'DELETE'] as const
}

export function getDeleteProvidersPriceListsPriceListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.priceLists)[':priceListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProvidersPriceListsPriceListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>,
    ) {
      return parseResponse(client.providers.priceLists[':priceListId'].$delete(args, options))
    },
  })
}

export function createDeleteProvidersPriceListsPriceListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.providers.priceLists)[':priceListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>,
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
    const mutationDefaults = getDeleteProvidersPriceListsPriceListIdMutationOptions<
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

export function getProvidersProviderIdQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
) {
  return ['providers', '/providers/:providerId', args] as const
}

export function getProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdQueryKey>
  >({
    queryKey: getProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdQueryKey>
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
    return { ...getProvidersProviderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteProvidersProviderIdMutationKey() {
  return ['providers', '/providers/:providerId', 'DELETE'] as const
}

export function getDeleteProvidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.providers)[':providerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProvidersProviderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.providers)[':providerId']['$delete']>) {
      return parseResponse(client.providers[':providerId'].$delete(args, options))
    },
  })
}

export function createDeleteProvidersProviderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.providers)[':providerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.providers)[':providerId']['$delete']>,
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
    const mutationDefaults = getDeleteProvidersProviderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvidersProviderIdAddressQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
) {
  return ['providers', '/providers/:providerId/address', args] as const
}

export function getProvidersProviderIdAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdAddressQueryKey>
  >({
    queryKey: getProvidersProviderIdAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].address.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderIdAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdAddressQueryKey>
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
      ...getProvidersProviderIdAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProvidersProviderIdCompetenciesQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
) {
  return ['providers', '/providers/:providerId/competencies', args] as const
}

export function getProvidersProviderIdCompetenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCompetenciesQueryKey>
  >({
    queryKey: getProvidersProviderIdCompetenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].competencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderIdCompetencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdCompetenciesQueryKey>
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
      ...getProvidersProviderIdCompetenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProvidersProviderIdContactQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
) {
  return ['providers', '/providers/:providerId/contact', args] as const
}

export function getProvidersProviderIdContactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdContactQueryKey>
  >({
    queryKey: getProvidersProviderIdContactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].contact.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdContactQueryKey>
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
      ...getProvidersProviderIdContactQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProvidersProviderIdCorrespondenceAddressQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
) {
  return ['providers', '/providers/:providerId/correspondenceAddress', args] as const
}

export function getProvidersProviderIdCorrespondenceAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCorrespondenceAddressQueryKey>
  >({
    queryKey: getProvidersProviderIdCorrespondenceAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].correspondenceAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderIdCorrespondenceAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.providers)[':providerId']['correspondenceAddress']['$get']
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
                    (typeof client.providers)[':providerId']['correspondenceAddress']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdCorrespondenceAddressQueryKey>
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
      ...getProvidersProviderIdCorrespondenceAddressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProvidersProviderIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
) {
  return ['providers', '/providers/:providerId/customFields', args] as const
}

export function getProvidersProviderIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCustomFieldsQueryKey>
  >({
    queryKey: getProvidersProviderIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersProviderIdCustomFieldsQueryKey>
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
      ...getProvidersProviderIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProvidersProviderIdNotificationInvitationMutationKey() {
  return ['providers', '/providers/:providerId/notification/invitation', 'POST'] as const
}

export function getPostProvidersProviderIdNotificationInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.providers)[':providerId']['notification']['invitation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.providers)[':providerId']['notification']['invitation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProvidersProviderIdNotificationInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.providers)[':providerId']['notification']['invitation']['$post']
      >,
    ) {
      return parseResponse(
        client.providers[':providerId'].notification.invitation.$post(args, options),
      )
    },
  })
}

export function createPostProvidersProviderIdNotificationInvitation<
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
                    (typeof client.providers)[':providerId']['notification']['invitation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.providers)[':providerId']['notification']['invitation']['$post']
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
    const mutationDefaults = getPostProvidersProviderIdNotificationInvitationMutationOptions<
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

export function getQuotesIdsQueryKey(args: InferRequestType<typeof client.quotes.ids.$get>) {
  return ['quotes', '/quotes/ids', args] as const
}

export function getQuotesIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotes.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesIdsQueryKey>
  >({
    queryKey: getQuotesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quotes.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesIdsQueryKey>
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
    return { ...getQuotesIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuotesQuoteIdQueryKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId', args] as const
}

export function getQuotesQuoteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdQueryKey>
  >({
    queryKey: getQuotesQuoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':quoteId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotesQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesQuoteIdQueryKey>
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
    return { ...getQuotesQuoteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteQuotesQuoteIdMutationKey() {
  return ['quotes', '/quotes/:quoteId', 'DELETE'] as const
}

export function getDeleteQuotesQuoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuotesQuoteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotes)[':quoteId']['$delete']>) {
      return parseResponse(client.quotes[':quoteId'].$delete(args, options))
    },
  })
}

export function createDeleteQuotesQuoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['$delete']>,
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
    const mutationDefaults = getDeleteQuotesQuoteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostQuotesQuoteIdConfirmationSendMutationKey() {
  return ['quotes', '/quotes/:quoteId/confirmation/send', 'POST'] as const
}

export function getPostQuotesQuoteIdConfirmationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdConfirmationSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].confirmation.send.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdConfirmationSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdConfirmationSendMutationOptions<
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

export function getQuotesQuoteIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/customFields', args] as const
}

export function getQuotesQuoteIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdCustomFieldsQueryKey>
  >({
    queryKey: getQuotesQuoteIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':quoteId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuotesQuoteIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesQuoteIdCustomFieldsQueryKey>
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
      ...getQuotesQuoteIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutQuotesQuoteIdCustomFieldsMutationKey() {
  return ['quotes', '/quotes/:quoteId/customFields', 'PUT'] as const
}

export function getPutQuotesQuoteIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].customFields.$put(args, options))
    },
  })
}

export function createPutQuotesQuoteIdCustomFields<
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
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']>,
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
    const mutationDefaults = getPutQuotesQuoteIdCustomFieldsMutationOptions<
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

export function getQuotesQuoteIdDatesQueryKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/dates', args] as const
}

export function getQuotesQuoteIdDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdDatesQueryKey>
  >({
    queryKey: getQuotesQuoteIdDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':quoteId'].dates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuotesQuoteIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesQuoteIdDatesQueryKey>
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
    return { ...getQuotesQuoteIdDatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuotesQuoteIdFinanceQueryKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/finance', args] as const
}

export function getQuotesQuoteIdFinanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdFinanceQueryKey>
  >({
    queryKey: getQuotesQuoteIdFinanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':quoteId'].finance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuotesQuoteIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesQuoteIdFinanceQueryKey>
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
      ...getQuotesQuoteIdFinanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostQuotesQuoteIdFinancePayablesMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables', 'POST'] as const
}

export function getPostQuotesQuoteIdFinancePayablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdFinancePayablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].finance.payables.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdFinancePayables<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdFinancePayablesMutationOptions<
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

export function getPutQuotesQuoteIdFinancePayablesPayableIdMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables/:payableId', 'PUT'] as const
}

export function getPutQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
      >,
    ) {
      return parseResponse(
        client.quotes[':quoteId'].finance.payables[':payableId'].$put(args, options),
      )
    },
  })
}

export function createPutQuotesQuoteIdFinancePayablesPayableId<
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
                    (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
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
    const mutationDefaults = getPutQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function getDeleteQuotesQuoteIdFinancePayablesPayableIdMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables/:payableId', 'DELETE'] as const
}

export function getDeleteQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuotesQuoteIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.quotes[':quoteId'].finance.payables[':payableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteQuotesQuoteIdFinancePayablesPayableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
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
    const mutationDefaults = getDeleteQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function getPostQuotesQuoteIdFinanceReceivablesMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables', 'POST'] as const
}

export function getPostQuotesQuoteIdFinanceReceivablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdFinanceReceivablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].finance.receivables.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdFinanceReceivables<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdFinanceReceivablesMutationOptions<
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

export function getPutQuotesQuoteIdFinanceReceivablesReceivableIdMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables/:receivableId', 'PUT'] as const
}

export function getPutQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
      >,
    ) {
      return parseResponse(
        client.quotes[':quoteId'].finance.receivables[':receivableId'].$put(args, options),
      )
    },
  })
}

export function createPutQuotesQuoteIdFinanceReceivablesReceivableId<
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
                    (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
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
    const mutationDefaults = getPutQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdMutationKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteQuotesQuoteIdFinanceReceivablesReceivableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
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
    const mutationDefaults = getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getQuotesQuoteIdInstructionsQueryKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/instructions', args] as const
}

export function getQuotesQuoteIdInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdInstructionsQueryKey>
  >({
    queryKey: getQuotesQuoteIdInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':quoteId'].instructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuotesQuoteIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesQuoteIdInstructionsQueryKey>
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
      ...getQuotesQuoteIdInstructionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutQuotesQuoteIdInstructionsMutationKey() {
  return ['quotes', '/quotes/:quoteId/instructions', 'PUT'] as const
}

export function getPutQuotesQuoteIdInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotesQuoteIdInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].instructions.$put(args, options))
    },
  })
}

export function createPutQuotesQuoteIdInstructions<
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
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']>,
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
    const mutationDefaults = getPutQuotesQuoteIdInstructionsMutationOptions<
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

export function getPostQuotesQuoteIdLanguageCombinationsMutationKey() {
  return ['quotes', '/quotes/:quoteId/languageCombinations', 'POST'] as const
}

export function getPostQuotesQuoteIdLanguageCombinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdLanguageCombinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>,
    ) {
      return parseResponse(client.quotes[':quoteId'].languageCombinations.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdLanguageCombinations<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdLanguageCombinationsMutationOptions<
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

export function getPostQuotesQuoteIdStartMutationKey() {
  return ['quotes', '/quotes/:quoteId/start', 'POST'] as const
}

export function getPostQuotesQuoteIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']>) {
      return parseResponse(client.quotes[':quoteId'].start.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.quotes)[':quoteId']['start']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostQuotesQuoteIdTasksMutationKey() {
  return ['quotes', '/quotes/:quoteId/tasks', 'POST'] as const
}

export function getPostQuotesQuoteIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotesQuoteIdTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']>) {
      return parseResponse(client.quotes[':quoteId'].tasks.$post(args, options))
    },
  })
}

export function createPostQuotesQuoteIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['tasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']>,
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
    const mutationDefaults = getPostQuotesQuoteIdTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsExportXmlMutationKey() {
  return ['reports', '/reports/export/xml', 'POST'] as const
}

export function getPostReportsExportXmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.export.xml.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.export.xml.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsExportXmlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.export.xml.$post>) {
      return parseResponse(client.reports.export.xml.$post(args, options))
    },
  })
}

export function createPostReportsExportXml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.export.xml.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.export.xml.$post>,
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
    const mutationDefaults = getPostReportsExportXmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsImportXmlMutationKey() {
  return ['reports', '/reports/import/xml', 'POST'] as const
}

export function getPostReportsImportXmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.import.xml.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.import.xml.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsImportXmlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.import.xml.$post>) {
      return parseResponse(client.reports.import.xml.$post(args, options))
    },
  })
}

export function createPostReportsImportXml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.import.xml.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.import.xml.$post>,
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
    const mutationDefaults = getPostReportsImportXmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteReportsReportIdMutationKey() {
  return ['reports', '/reports/:reportId', 'DELETE'] as const
}

export function getDeleteReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':reportId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.reports)[':reportId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportsReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)[':reportId']['$delete']>) {
      return parseResponse(client.reports[':reportId'].$delete(args, options))
    },
  })
}

export function createDeleteReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.reports)[':reportId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.reports)[':reportId']['$delete']>,
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
    const mutationDefaults = getDeleteReportsReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsReportIdDuplicateMutationKey() {
  return ['reports', '/reports/:reportId/duplicate', 'POST'] as const
}

export function getPostReportsReportIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['duplicate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsReportIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']>,
    ) {
      return parseResponse(client.reports[':reportId'].duplicate.$post(args, options))
    },
  })
}

export function createPostReportsReportIdDuplicate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.reports)[':reportId']['duplicate']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']>,
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
    const mutationDefaults = getPostReportsReportIdDuplicateMutationOptions<
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

export function getPutReportsReportIdPreferredMutationKey() {
  return ['reports', '/reports/:reportId/preferred', 'PUT'] as const
}

export function getPutReportsReportIdPreferredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['preferred']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportsReportIdPreferredMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']>,
    ) {
      return parseResponse(client.reports[':reportId'].preferred.$put(args, options))
    },
  })
}

export function createPutReportsReportIdPreferred<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.reports)[':reportId']['preferred']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']>,
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
    const mutationDefaults = getPutReportsReportIdPreferredMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportsReportIdResultCsvQueryKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
) {
  return ['reports', '/reports/:reportId/result/csv', args] as const
}

export function getReportsReportIdResultCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdResultCsvQueryKey>
  >({
    queryKey: getReportsReportIdResultCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':reportId'].result.csv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsReportIdResultCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsReportIdResultCsvQueryKey>
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
      ...getReportsReportIdResultCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportsReportIdResultPrinterFriendlyQueryKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
) {
  return ['reports', '/reports/:reportId/result/printerFriendly', args] as const
}

export function getReportsReportIdResultPrinterFriendlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdResultPrinterFriendlyQueryKey>
  >({
    queryKey: getReportsReportIdResultPrinterFriendlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':reportId'].result.printerFriendly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsReportIdResultPrinterFriendly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.reports)[':reportId']['result']['printerFriendly']['$get']
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
                    (typeof client.reports)[':reportId']['result']['printerFriendly']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsReportIdResultPrinterFriendlyQueryKey>
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
      ...getReportsReportIdResultPrinterFriendlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServicesActiveQueryKey(
  args: InferRequestType<typeof client.services.active.$get>,
) {
  return ['services', '/services/active', args] as const
}

export function getServicesActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesActiveQueryKey>
  >({
    queryKey: getServicesActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createServicesActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServicesActiveQueryKey>
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
    return { ...getServicesActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getServicesAllQueryKey(args: InferRequestType<typeof client.services.all.$get>) {
  return ['services', '/services/all', args] as const
}

export function getServicesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesAllQueryKey>
  >({
    queryKey: getServicesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createServicesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getServicesAllQueryKey>
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
    return { ...getServicesAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubscriptionQueryKey() {
  return ['subscription', '/subscription'] as const
}

export function getSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubscriptionQueryKey>
  >({
    queryKey: getSubscriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionQueryKey>
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
    return { ...getSubscriptionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSubscriptionMutationKey() {
  return ['subscription', '/subscription', 'POST'] as const
}

export function getPostSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscription.$post>) {
      return parseResponse(client.subscription.$post(args, options))
    },
  })
}

export function createPostSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscription.$post>,
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
    const mutationDefaults = getPostSubscriptionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionSupportsQueryKey() {
  return ['subscription', '/subscription/supports'] as const
}

export function getSubscriptionSupportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionSupportsQueryKey>
  >({
    queryKey: getSubscriptionSupportsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription.supports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionSupports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionSupportsQueryKey>
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
    return { ...getSubscriptionSupportsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSubscriptionSubscriptionIdMutationKey() {
  return ['subscription', '/subscription/:subscriptionId', 'DELETE'] as const
}

export function getDeleteSubscriptionSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscription)[':subscriptionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>,
    ) {
      return parseResponse(client.subscription[':subscriptionId'].$delete(args, options))
    },
  })
}

export function createDeleteSubscriptionSubscriptionId<
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
                Awaited<ReturnType<(typeof client.subscription)[':subscriptionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>,
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
    const mutationDefaults = getDeleteSubscriptionSubscriptionIdMutationOptions<
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

export function getDeleteTasksTaskIdMutationKey() {
  return ['tasks', '/tasks/:taskId', 'DELETE'] as const
}

export function getDeleteTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['$delete']>) {
      return parseResponse(client.tasks[':taskId'].$delete(args, options))
    },
  })
}

export function createDeleteTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tasks)[':taskId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['$delete']>,
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
    const mutationDefaults = getDeleteTasksTaskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutTasksTaskIdClientTaskPONumberMutationKey() {
  return ['tasks', '/tasks/:taskId/clientTaskPONumber', 'PUT'] as const
}

export function getPutTasksTaskIdClientTaskPONumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdClientTaskPONumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>,
    ) {
      return parseResponse(client.tasks[':taskId'].clientTaskPONumber.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdClientTaskPONumber<
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
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdClientTaskPONumberMutationOptions<
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

export function getTasksTaskIdContactsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/contacts', args] as const
}

export function getTasksTaskIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdContactsQueryKey>
  >({
    queryKey: getTasksTaskIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdContactsQueryKey>
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
    return { ...getTasksTaskIdContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutTasksTaskIdContactsMutationKey() {
  return ['tasks', '/tasks/:taskId/contacts', 'PUT'] as const
}

export function getPutTasksTaskIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdContactsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']>) {
      return parseResponse(client.tasks[':taskId'].contacts.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdContactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/customFields', args] as const
}

export function getTasksTaskIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdCustomFieldsQueryKey>
  >({
    queryKey: getTasksTaskIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdCustomFieldsQueryKey>
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
      ...getTasksTaskIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTasksTaskIdCustomFieldsMutationKey() {
  return ['tasks', '/tasks/:taskId/customFields', 'PUT'] as const
}

export function getPutTasksTaskIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']>,
    ) {
      return parseResponse(client.tasks[':taskId'].customFields.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdCustomFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskIdDatesQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/dates', args] as const
}

export function getTasksTaskIdDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdDatesQueryKey>
  >({
    queryKey: getTasksTaskIdDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].dates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdDatesQueryKey>
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
    return { ...getTasksTaskIdDatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutTasksTaskIdDatesMutationKey() {
  return ['tasks', '/tasks/:taskId/dates', 'PUT'] as const
}

export function getPutTasksTaskIdDatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdDatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']>) {
      return parseResponse(client.tasks[':taskId'].dates.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdDatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskIdFilesQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/files', args] as const
}

export function getTasksTaskIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdFilesQueryKey>
  >({
    queryKey: getTasksTaskIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdFilesQueryKey>
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
    return { ...getTasksTaskIdFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTasksTaskIdFilesInputMutationKey() {
  return ['tasks', '/tasks/:taskId/files/input', 'POST'] as const
}

export function getPostTasksTaskIdFilesInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['input']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIdFilesInputMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']>,
    ) {
      return parseResponse(client.tasks[':taskId'].files.input.$post(args, options))
    },
  })
}

export function createPostTasksTaskIdFilesInput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['input']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']>,
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
    const mutationDefaults = getPostTasksTaskIdFilesInputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskIdInstructionsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/instructions', args] as const
}

export function getTasksTaskIdInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdInstructionsQueryKey>
  >({
    queryKey: getTasksTaskIdInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].instructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdInstructionsQueryKey>
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
      ...getTasksTaskIdInstructionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTasksTaskIdInstructionsMutationKey() {
  return ['tasks', '/tasks/:taskId/instructions', 'PUT'] as const
}

export function getPutTasksTaskIdInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']>,
    ) {
      return parseResponse(client.tasks[':taskId'].instructions.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdInstructionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutTasksTaskIdNameMutationKey() {
  return ['tasks', '/tasks/:taskId/name', 'PUT'] as const
}

export function getPutTasksTaskIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']>) {
      return parseResponse(client.tasks[':taskId'].name.$put(args, options))
    },
  })
}

export function createPutTasksTaskIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']>,
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
    const mutationDefaults = getPutTasksTaskIdNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskIdProgressQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/progress', args] as const
}

export function getTasksTaskIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdProgressQueryKey>
  >({
    queryKey: getTasksTaskIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksTaskIdProgressQueryKey>
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
    return { ...getTasksTaskIdProgressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTasksTaskIdStartMutationKey() {
  return ['tasks', '/tasks/:taskId/start', 'POST'] as const
}

export function getPostTasksTaskIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIdStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']>) {
      return parseResponse(client.tasks[':taskId'].start.$post(args, options))
    },
  })
}

export function createPostTasksTaskIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tasks)[':taskId']['start']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']>,
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
    const mutationDefaults = getPostTasksTaskIdStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
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
    return { ...getUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeQueryKey>
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
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersMeTimeZoneQueryKey() {
  return ['users', '/users/me/timeZone'] as const
}

export function getUsersMeTimeZoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeTimeZoneQueryKey>
  >({
    queryKey: getUsersMeTimeZoneQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.timeZone.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersMeTimeZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeTimeZoneQueryKey>
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
    return { ...getUsersMeTimeZoneQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdQueryKey>
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
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PUT'] as const
}

export function getPutUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$put']>) {
      return parseResponse(client.users[':userId'].$put(args, options))
    },
  })
}

export function createPutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
) {
  return ['users', '/users/:userId/customFields', args] as const
}

export function getUsersUserIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomFieldsQueryKey>
  >({
    queryKey: getUsersUserIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdCustomFieldsQueryKey>
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
      ...getUsersUserIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUsersUserIdCustomFieldsMutationKey() {
  return ['users', '/users/:userId/customFields', 'PUT'] as const
}

export function getPutUsersUserIdCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['customFields']['$put']>,
    ) {
      return parseResponse(client.users[':userId'].customFields.$put(args, options))
    },
  })
}

export function createPutUsersUserIdCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['customFields']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdCustomFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdCustomFieldsCustomFieldKeyQueryKey(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
) {
  return ['users', '/users/:userId/customFields/:customFieldKey', args] as const
}

export function getUsersUserIdCustomFieldsCustomFieldKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomFieldsCustomFieldKeyQueryKey>
  >({
    queryKey: getUsersUserIdCustomFieldsCustomFieldKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].customFields[':customFieldKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdCustomFieldsCustomFieldKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
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
                    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdCustomFieldsCustomFieldKeyQueryKey>
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
      ...getUsersUserIdCustomFieldsCustomFieldKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUsersUserIdCustomFieldsCustomFieldKeyMutationKey() {
  return ['users', '/users/:userId/customFields/:customFieldKey', 'PUT'] as const
}

export function getPutUsersUserIdCustomFieldsCustomFieldKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdCustomFieldsCustomFieldKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].customFields[':customFieldKey'].$put(args, options),
      )
    },
  })
}

export function createPutUsersUserIdCustomFieldsCustomFieldKey<
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
                    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']
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
    const mutationDefaults = getPutUsersUserIdCustomFieldsCustomFieldKeyMutationOptions<
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

export function getPutUsersUserIdPasswordMutationKey() {
  return ['users', '/users/:userId/password', 'PUT'] as const
}

export function getPutUsersUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['password']['$put']>) {
      return parseResponse(client.users[':userId'].password.$put(args, options))
    },
  })
}

export function createPutUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2JobsForExternalIdQueryKey(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
) {
  return ['v2', '/v2/jobs/for-external-id', args] as const
}

export function getV2JobsForExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsForExternalIdQueryKey>
  >({
    queryKey: getV2JobsForExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.jobs['for-external-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2JobsForExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2JobsForExternalIdQueryKey>
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
    return { ...getV2JobsForExternalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2JobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId', args] as const
}

export function getV2JobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdQueryKey>
  >({
    queryKey: getV2JobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2JobsJobIdQueryKey>
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
    return { ...getV2JobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV2JobsJobIdDatesMutationKey() {
  return ['v2', '/v2/jobs/:jobId/dates', 'PUT'] as const
}

export function getPutV2JobsJobIdDatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdDatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>) {
      return parseResponse(client.v2.jobs[':jobId'].dates.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdDatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2JobsJobIdFilesAddExternalLinkMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/addExternalLink', 'POST'] as const
}

export function getPostV2JobsJobIdFilesAddExternalLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2JobsJobIdFilesAddExternalLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']
      >,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.addExternalLink.$post(args, options))
    },
  })
}

export function createPostV2JobsJobIdFilesAddExternalLink<
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
                  ReturnType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>,
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
    const mutationDefaults = getPostV2JobsJobIdFilesAddExternalLinkMutationOptions<
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

export function getV2JobsJobIdFilesDeliveredQueryKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId/files/delivered', args] as const
}

export function getV2JobsJobIdFilesDeliveredQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesDeliveredQueryKey>
  >({
    queryKey: getV2JobsJobIdFilesDeliveredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.delivered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2JobsJobIdFilesDelivered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2JobsJobIdFilesDeliveredQueryKey>
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
      ...getV2JobsJobIdFilesDeliveredQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2JobsJobIdFilesDeliveredAddMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/add', 'PUT'] as const
}

export function getPutV2JobsJobIdFilesDeliveredAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdFilesDeliveredAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']
      >,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.delivered.add.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdFilesDeliveredAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdFilesDeliveredAddMutationOptions<
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

export function getPostV2JobsJobIdFilesDeliveredAddLinkMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/addLink', 'POST'] as const
}

export function getPostV2JobsJobIdFilesDeliveredAddLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2JobsJobIdFilesDeliveredAddLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']
      >,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.delivered.addLink.$post(args, options))
    },
  })
}

export function createPostV2JobsJobIdFilesDeliveredAddLink<
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
                    (typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']
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
    const mutationDefaults = getPostV2JobsJobIdFilesDeliveredAddLinkMutationOptions<
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

export function getPostV2JobsJobIdFilesDeliveredUploadMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/upload', 'POST'] as const
}

export function getPostV2JobsJobIdFilesDeliveredUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2JobsJobIdFilesDeliveredUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']
      >,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.delivered.upload.$post(args, options))
    },
  })
}

export function createPostV2JobsJobIdFilesDeliveredUpload<
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
                    (typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']
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
    const mutationDefaults = getPostV2JobsJobIdFilesDeliveredUploadMutationOptions<
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

export function getV2JobsJobIdFilesSharedReferenceFilesQueryKey(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedReferenceFiles', args] as const
}

export function getV2JobsJobIdFilesSharedReferenceFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesSharedReferenceFilesQueryKey>
  >({
    queryKey: getV2JobsJobIdFilesSharedReferenceFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2JobsJobIdFilesSharedReferenceFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
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
                    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2JobsJobIdFilesSharedReferenceFilesQueryKey>
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
      ...getV2JobsJobIdFilesSharedReferenceFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2JobsJobIdFilesSharedReferenceFilesShareMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/sharedReferenceFiles/share', 'PUT'] as const
}

export function getPutV2JobsJobIdFilesSharedReferenceFilesShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdFilesSharedReferenceFilesShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.sharedReferenceFiles.share.$put(args, options),
      )
    },
  })
}

export function createPutV2JobsJobIdFilesSharedReferenceFilesShare<
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
                    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
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
    const mutationDefaults = getPutV2JobsJobIdFilesSharedReferenceFilesShareMutationOptions<
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

export function getV2JobsJobIdFilesSharedWorkFilesQueryKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedWorkFiles', args] as const
}

export function getV2JobsJobIdFilesSharedWorkFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesSharedWorkFilesQueryKey>
  >({
    queryKey: getV2JobsJobIdFilesSharedWorkFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2JobsJobIdFilesSharedWorkFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2JobsJobIdFilesSharedWorkFilesQueryKey>
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
      ...getV2JobsJobIdFilesSharedWorkFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2JobsJobIdFilesSharedWorkFilesShareMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/sharedWorkFiles/share', 'PUT'] as const
}

export function getPutV2JobsJobIdFilesSharedWorkFilesShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdFilesSharedWorkFilesShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
      >,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.sharedWorkFiles.share.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdFilesSharedWorkFilesShare<
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
                    (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
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
    const mutationDefaults = getPutV2JobsJobIdFilesSharedWorkFilesShareMutationOptions<
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

export function getPutV2JobsJobIdFilesStopSharingMutationKey() {
  return ['v2', '/v2/jobs/:jobId/files/stopSharing', 'PUT'] as const
}

export function getPutV2JobsJobIdFilesStopSharingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdFilesStopSharingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].files.stopSharing.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdFilesStopSharing<
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
                  ReturnType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdFilesStopSharingMutationOptions<
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

export function getPutV2JobsJobIdInstructionsMutationKey() {
  return ['v2', '/v2/jobs/:jobId/instructions', 'PUT'] as const
}

export function getPutV2JobsJobIdInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>,
    ) {
      return parseResponse(client.v2.jobs[':jobId'].instructions.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdInstructionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV2JobsJobIdStatusMutationKey() {
  return ['v2', '/v2/jobs/:jobId/status', 'PUT'] as const
}

export function getPutV2JobsJobIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']>) {
      return parseResponse(client.v2.jobs[':jobId'].status.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV2JobsJobIdVendorMutationKey() {
  return ['v2', '/v2/jobs/:jobId/vendor', 'PUT'] as const
}

export function getPutV2JobsJobIdVendorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2JobsJobIdVendorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>) {
      return parseResponse(client.v2.jobs[':jobId'].vendor.$put(args, options))
    },
  })
}

export function createPutV2JobsJobIdVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>,
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
    const mutationDefaults = getPutV2JobsJobIdVendorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2ProjectsMutationKey() {
  return ['v2', '/v2/projects', 'POST'] as const
}

export function getPostV2ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.$post>) {
      return parseResponse(client.v2.projects.$post(args, options))
    },
  })
}

export function createPostV2Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.projects.$post>,
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
    const mutationDefaults = getPostV2ProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2ProjectsFilesArchiveMutationKey() {
  return ['v2', '/v2/projects/files/archive', 'POST'] as const
}

export function getPostV2ProjectsFilesArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.files.archive.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.projects.files.archive.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsFilesArchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.files.archive.$post>) {
      return parseResponse(client.v2.projects.files.archive.$post(args, options))
    },
  })
}

export function createPostV2ProjectsFilesArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.projects.files.archive.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.projects.files.archive.$post>,
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
    const mutationDefaults = getPostV2ProjectsFilesArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ProjectsFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
) {
  return ['v2', '/v2/projects/files/:fileId', args] as const
}

export function getV2ProjectsFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsFilesFileIdQueryKey>
  >({
    queryKey: getV2ProjectsFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsFilesFileIdQueryKey>
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
      ...getV2ProjectsFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ProjectsFilesFileIdDownloadFileNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
) {
  return ['v2', '/v2/projects/files/:fileId/download/:fileName', args] as const
}

export function getV2ProjectsFilesFileIdDownloadFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsFilesFileIdDownloadFileNameQueryKey>
  >({
    queryKey: getV2ProjectsFilesFileIdDownloadFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.files[':fileId'].download[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsFilesFileIdDownloadFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
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
                    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsFilesFileIdDownloadFileNameQueryKey>
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
      ...getV2ProjectsFilesFileIdDownloadFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ProjectsForExternalIdExternalProjectIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
) {
  return ['v2', '/v2/projects/for-external-id/:externalProjectId', args] as const
}

export function getV2ProjectsForExternalIdExternalProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsForExternalIdExternalProjectIdQueryKey>
  >({
    queryKey: getV2ProjectsForExternalIdExternalProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects['for-external-id'][':externalProjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsForExternalIdExternalProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
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
                    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsForExternalIdExternalProjectIdQueryKey>
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
      ...getV2ProjectsForExternalIdExternalProjectIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2ProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId', args] as const
}

export function getV2ProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdQueryKey>
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
    return { ...getV2ProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2ProjectsProjectIdAddJobMutationKey() {
  return ['v2', '/v2/projects/:projectId/addJob', 'POST'] as const
}

export function getPostV2ProjectsProjectIdAddJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdAddJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].addJob.$post(args, options))
    },
  })
}

export function createPostV2ProjectsProjectIdAddJob<
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
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>,
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
    const mutationDefaults = getPostV2ProjectsProjectIdAddJobMutationOptions<
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

export function getV2ProjectsProjectIdCatToolProjectQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/catToolProject', args] as const
}

export function getV2ProjectsProjectIdCatToolProjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdCatToolProjectQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdCatToolProjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].catToolProject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdCatToolProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdCatToolProjectQueryKey>
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
      ...getV2ProjectsProjectIdCatToolProjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ProjectsProjectIdClientContactsQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/clientContacts', args] as const
}

export function getV2ProjectsProjectIdClientContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdClientContactsQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdClientContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].clientContacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdClientContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdClientContactsQueryKey>
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
      ...getV2ProjectsProjectIdClientContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2ProjectsProjectIdClientContactsMutationKey() {
  return ['v2', '/v2/projects/:projectId/clientContacts', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdClientContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdClientContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].clientContacts.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdClientContacts<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdClientContactsMutationOptions<
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

export function getPutV2ProjectsProjectIdClientDeadlineMutationKey() {
  return ['v2', '/v2/projects/:projectId/clientDeadline', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdClientDeadlineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdClientDeadlineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].clientDeadline.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdClientDeadline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdClientDeadlineMutationOptions<
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

export function getPutV2ProjectsProjectIdClientNotesMutationKey() {
  return ['v2', '/v2/projects/:projectId/clientNotes', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdClientNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdClientNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].clientNotes.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdClientNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdClientNotesMutationOptions<
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

export function getPutV2ProjectsProjectIdClientReferenceNumberMutationKey() {
  return ['v2', '/v2/projects/:projectId/clientReferenceNumber', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdClientReferenceNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdClientReferenceNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].clientReferenceNumber.$put(args, options),
      )
    },
  })
}

export function createPutV2ProjectsProjectIdClientReferenceNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']
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
    const mutationDefaults = getPutV2ProjectsProjectIdClientReferenceNumberMutationOptions<
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

export function getV2ProjectsProjectIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/customFields', args] as const
}

export function getV2ProjectsProjectIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdCustomFieldsQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdCustomFieldsQueryKey>
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
      ...getV2ProjectsProjectIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2ProjectsProjectIdCustomFieldsKeyMutationKey() {
  return ['v2', '/v2/projects/:projectId/customFields/:key', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdCustomFieldsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdCustomFieldsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].customFields[':key'].$put(args, options),
      )
    },
  })
}

export function createPutV2ProjectsProjectIdCustomFieldsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']
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
    const mutationDefaults = getPutV2ProjectsProjectIdCustomFieldsKeyMutationOptions<
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

export function getV2ProjectsProjectIdFilesQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/files', args] as const
}

export function getV2ProjectsProjectIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFilesQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdFilesQueryKey>
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
      ...getV2ProjectsProjectIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2ProjectsProjectIdFilesAddMutationKey() {
  return ['v2', '/v2/projects/:projectId/files/add', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdFilesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdFilesAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].files.add.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdFilesAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdFilesAddMutationOptions<
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

export function getPostV2ProjectsProjectIdFilesAddExternalLinkMutationKey() {
  return ['v2', '/v2/projects/:projectId/files/addExternalLink', 'POST'] as const
}

export function getPostV2ProjectsProjectIdFilesAddExternalLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdFilesAddExternalLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].files.addExternalLink.$post(args, options),
      )
    },
  })
}

export function createPostV2ProjectsProjectIdFilesAddExternalLink<
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
                    (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
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
    const mutationDefaults = getPostV2ProjectsProjectIdFilesAddExternalLinkMutationOptions<
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

export function getPostV2ProjectsProjectIdFilesAddLinkMutationKey() {
  return ['v2', '/v2/projects/:projectId/files/addLink', 'POST'] as const
}

export function getPostV2ProjectsProjectIdFilesAddLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdFilesAddLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['files']['addLink']['$post']
      >,
    ) {
      return parseResponse(client.v2.projects[':projectId'].files.addLink.$post(args, options))
    },
  })
}

export function createPostV2ProjectsProjectIdFilesAddLink<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>,
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
    const mutationDefaults = getPostV2ProjectsProjectIdFilesAddLinkMutationOptions<
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

export function getV2ProjectsProjectIdFilesDeliverableQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/files/deliverable', args] as const
}

export function getV2ProjectsProjectIdFilesDeliverableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFilesDeliverableQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdFilesDeliverableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].files.deliverable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdFilesDeliverable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']
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
                    (typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdFilesDeliverableQueryKey>
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
      ...getV2ProjectsProjectIdFilesDeliverableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2ProjectsProjectIdFilesUploadMutationKey() {
  return ['v2', '/v2/projects/:projectId/files/upload', 'POST'] as const
}

export function getPostV2ProjectsProjectIdFilesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdFilesUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].files.upload.$post(args, options))
    },
  })
}

export function createPostV2ProjectsProjectIdFilesUpload<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>,
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
    const mutationDefaults = getPostV2ProjectsProjectIdFilesUploadMutationOptions<
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

export function getV2ProjectsProjectIdFinanceQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/finance', args] as const
}

export function getV2ProjectsProjectIdFinanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFinanceQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdFinanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdFinanceQueryKey>
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
      ...getV2ProjectsProjectIdFinanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2ProjectsProjectIdFinancePayablesMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables', 'POST'] as const
}

export function getPostV2ProjectsProjectIdFinancePayablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.projects)[':projectId']['finance']['payables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['payables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdFinancePayablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['payables']['$post']
      >,
    ) {
      return parseResponse(client.v2.projects[':projectId'].finance.payables.$post(args, options))
    },
  })
}

export function createPostV2ProjectsProjectIdFinancePayables<
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
                    (typeof client.v2.projects)[':projectId']['finance']['payables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['payables']['$post']
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
    const mutationDefaults = getPostV2ProjectsProjectIdFinancePayablesMutationOptions<
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

export function getPutV2ProjectsProjectIdFinancePayablesPayableIdMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables/:payableId', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.payables[':payableId'].$put(args, options),
      )
    },
  })
}

export function createPutV2ProjectsProjectIdFinancePayablesPayableId<
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
                    (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
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
    const mutationDefaults = getPutV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function getDeleteV2ProjectsProjectIdFinancePayablesPayableIdMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables/:payableId', 'DELETE'] as const
}

export function getDeleteV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProjectsProjectIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.payables[':payableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2ProjectsProjectIdFinancePayablesPayableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
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
    const mutationDefaults = getDeleteV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function getPostV2ProjectsProjectIdFinanceReceivablesMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables', 'POST'] as const
}

export function getPostV2ProjectsProjectIdFinanceReceivablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdFinanceReceivablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.receivables.$post(args, options),
      )
    },
  })
}

export function createPostV2ProjectsProjectIdFinanceReceivables<
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
                    (typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']
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
    const mutationDefaults = getPostV2ProjectsProjectIdFinanceReceivablesMutationOptions<
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

export function getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables/:receivableId', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.receivables[':receivableId'].$put(args, options),
      )
    },
  })
}

export function createPutV2ProjectsProjectIdFinanceReceivablesReceivableId<
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
                    (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
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
    const mutationDefaults = getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.receivables[':receivableId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV2ProjectsProjectIdFinanceReceivablesReceivableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
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
      getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getPutV2ProjectsProjectIdInternalNotesMutationKey() {
  return ['v2', '/v2/projects/:projectId/internalNotes', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdInternalNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdInternalNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].internalNotes.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdInternalNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdInternalNotesMutationOptions<
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

export function getV2ProjectsProjectIdJobsQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/jobs', args] as const
}

export function getV2ProjectsProjectIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdJobsQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdJobsQueryKey>
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
      ...getV2ProjectsProjectIdJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2ProjectsProjectIdOrderDateMutationKey() {
  return ['v2', '/v2/projects/:projectId/orderDate', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdOrderDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdOrderDateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].orderDate.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdOrderDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdOrderDateMutationOptions<
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

export function getV2ProjectsProjectIdProcessQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/process', args] as const
}

export function getV2ProjectsProjectIdProcessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdProcessQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdProcessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':projectId'].process.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ProjectsProjectIdProcess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ProjectsProjectIdProcessQueryKey>
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
      ...getV2ProjectsProjectIdProcessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2ProjectsProjectIdSourceLanguageMutationKey() {
  return ['v2', '/v2/projects/:projectId/sourceLanguage', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdSourceLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdSourceLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].sourceLanguage.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdSourceLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdSourceLanguageMutationOptions<
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

export function getPutV2ProjectsProjectIdSpecializationMutationKey() {
  return ['v2', '/v2/projects/:projectId/specialization', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdSpecializationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdSpecializationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].specialization.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdSpecialization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdSpecializationMutationOptions<
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

export function getPutV2ProjectsProjectIdStatusMutationKey() {
  return ['v2', '/v2/projects/:projectId/status', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].status.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdStatusMutationOptions<
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

export function getPutV2ProjectsProjectIdTargetLanguagesMutationKey() {
  return ['v2', '/v2/projects/:projectId/targetLanguages', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdTargetLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdTargetLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].targetLanguages.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdTargetLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdTargetLanguagesMutationOptions<
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

export function getPutV2ProjectsProjectIdVendorInstructionsMutationKey() {
  return ['v2', '/v2/projects/:projectId/vendorInstructions', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdVendorInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdVendorInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']
      >,
    ) {
      return parseResponse(client.v2.projects[':projectId'].vendorInstructions.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdVendorInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdVendorInstructionsMutationOptions<
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

export function getPutV2ProjectsProjectIdVolumeMutationKey() {
  return ['v2', '/v2/projects/:projectId/volume', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['volume']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']>,
    ) {
      return parseResponse(client.v2.projects[':projectId'].volume.$put(args, options))
    },
  })
}

export function createPutV2ProjectsProjectIdVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['volume']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdVolumeMutationOptions<
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

export function getPostV2QuotesMutationKey() {
  return ['v2', '/v2/quotes', 'POST'] as const
}

export function getPostV2QuotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.quotes.$post>) {
      return parseResponse(client.v2.quotes.$post(args, options))
    },
  })
}

export function createPostV2Quotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.quotes.$post>,
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
    const mutationDefaults = getPostV2QuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2QuotesFilesArchiveMutationKey() {
  return ['v2', '/v2/quotes/files/archive', 'POST'] as const
}

export function getPostV2QuotesFilesArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.files.archive.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.quotes.files.archive.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QuotesFilesArchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.quotes.files.archive.$post>) {
      return parseResponse(client.v2.quotes.files.archive.$post(args, options))
    },
  })
}

export function createPostV2QuotesFilesArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.files.archive.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.quotes.files.archive.$post>,
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
    const mutationDefaults = getPostV2QuotesFilesArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2QuotesFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
) {
  return ['v2', '/v2/quotes/files/:fileId', args] as const
}

export function getV2QuotesFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesFilesFileIdQueryKey>
  >({
    queryKey: getV2QuotesFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes.files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesFilesFileIdQueryKey>
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
    return { ...getV2QuotesFilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2QuotesFilesFileIdDownloadFileNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
) {
  return ['v2', '/v2/quotes/files/:fileId/download/:fileName', args] as const
}

export function getV2QuotesFilesFileIdDownloadFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesFilesFileIdDownloadFileNameQueryKey>
  >({
    queryKey: getV2QuotesFilesFileIdDownloadFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes.files[':fileId'].download[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesFilesFileIdDownloadFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
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
                    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesFilesFileIdDownloadFileNameQueryKey>
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
      ...getV2QuotesFilesFileIdDownloadFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2QuotesQuoteIdQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId', args] as const
}

export function getV2QuotesQuoteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2QuotesQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdQueryKey>
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
    return { ...getV2QuotesQuoteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdBusinessDaysMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/businessDays', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdBusinessDaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdBusinessDaysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].businessDays.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdBusinessDays<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdBusinessDaysMutationOptions<
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

export function getV2QuotesQuoteIdClientContactsQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/clientContacts', args] as const
}

export function getV2QuotesQuoteIdClientContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdClientContactsQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdClientContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].clientContacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesQuoteIdClientContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdClientContactsQueryKey>
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
      ...getV2QuotesQuoteIdClientContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdClientContactsMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/clientContacts', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdClientContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdClientContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].clientContacts.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdClientContacts<
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
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdClientContactsMutationOptions<
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

export function getPutV2QuotesQuoteIdClientNotesMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/clientNotes', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdClientNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdClientNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].clientNotes.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdClientNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdClientNotesMutationOptions<
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

export function getPutV2QuotesQuoteIdClientReferenceNumberMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/clientReferenceNumber', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdClientReferenceNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdClientReferenceNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']
      >,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].clientReferenceNumber.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdClientReferenceNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdClientReferenceNumberMutationOptions<
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

export function getV2QuotesQuoteIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/customFields', args] as const
}

export function getV2QuotesQuoteIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdCustomFieldsQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesQuoteIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdCustomFieldsQueryKey>
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
      ...getV2QuotesQuoteIdCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdCustomFieldsKeyMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/customFields/:key', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdCustomFieldsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdCustomFieldsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].customFields[':key'].$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdCustomFieldsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdCustomFieldsKeyMutationOptions<
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

export function getPutV2QuotesQuoteIdExpectedDeliveryDateMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/expectedDeliveryDate', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdExpectedDeliveryDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdExpectedDeliveryDateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].expectedDeliveryDate.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdExpectedDeliveryDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdExpectedDeliveryDateMutationOptions<
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

export function getV2QuotesQuoteIdFilesQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/files', args] as const
}

export function getV2QuotesQuoteIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdFilesQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesQuoteIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdFilesQueryKey>
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
      ...getV2QuotesQuoteIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdFilesAddMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/files/add', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdFilesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdFilesAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].files.add.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdFilesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdFilesAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2QuotesQuoteIdFilesUploadMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/files/upload', 'POST'] as const
}

export function getPostV2QuotesQuoteIdFilesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QuotesQuoteIdFilesUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].files.upload.$post(args, options))
    },
  })
}

export function createPostV2QuotesQuoteIdFilesUpload<
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
                  ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>,
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
    const mutationDefaults = getPostV2QuotesQuoteIdFilesUploadMutationOptions<
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

export function getV2QuotesQuoteIdFinanceQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/finance', args] as const
}

export function getV2QuotesQuoteIdFinanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdFinanceQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdFinanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesQuoteIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdFinanceQueryKey>
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
      ...getV2QuotesQuoteIdFinanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2QuotesQuoteIdFinancePayablesMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables', 'POST'] as const
}

export function getPostV2QuotesQuoteIdFinancePayablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QuotesQuoteIdFinancePayablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].finance.payables.$post(args, options))
    },
  })
}

export function createPostV2QuotesQuoteIdFinancePayables<
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
                  ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>,
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
    const mutationDefaults = getPostV2QuotesQuoteIdFinancePayablesMutationOptions<
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

export function getPutV2QuotesQuoteIdFinancePayablesPayableIdMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables/:payableId', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.payables[':payableId'].$put(args, options),
      )
    },
  })
}

export function createPutV2QuotesQuoteIdFinancePayablesPayableId<
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
                    (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
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
    const mutationDefaults = getPutV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function getDeleteV2QuotesQuoteIdFinancePayablesPayableIdMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables/:payableId', 'DELETE'] as const
}

export function getDeleteV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2QuotesQuoteIdFinancePayablesPayableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.payables[':payableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2QuotesQuoteIdFinancePayablesPayableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
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
    const mutationDefaults = getDeleteV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function getPostV2QuotesQuoteIdFinanceReceivablesMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables', 'POST'] as const
}

export function getPostV2QuotesQuoteIdFinanceReceivablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QuotesQuoteIdFinanceReceivablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']
      >,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].finance.receivables.$post(args, options))
    },
  })
}

export function createPostV2QuotesQuoteIdFinanceReceivables<
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
                    (typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']
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
    const mutationDefaults = getPostV2QuotesQuoteIdFinanceReceivablesMutationOptions<
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

export function getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables/:receivableId', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$put(args, options),
      )
    },
  })
}

export function createPutV2QuotesQuoteIdFinanceReceivablesReceivableId<
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
                    (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
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
    const mutationDefaults = getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2QuotesQuoteIdFinanceReceivablesReceivableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
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
    const mutationDefaults = getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getPutV2QuotesQuoteIdInternalNotesMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/internalNotes', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdInternalNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdInternalNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].internalNotes.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdInternalNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdInternalNotesMutationOptions<
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

export function getV2QuotesQuoteIdJobsQueryKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/jobs', args] as const
}

export function getV2QuotesQuoteIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdJobsQueryKey>
  >({
    queryKey: getV2QuotesQuoteIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.quotes[':quoteId'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QuotesQuoteIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QuotesQuoteIdJobsQueryKey>
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
    return { ...getV2QuotesQuoteIdJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdQuoteExpiryMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/quoteExpiry', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdQuoteExpiryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdQuoteExpiryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].quoteExpiry.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdQuoteExpiry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdQuoteExpiryMutationOptions<
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

export function getPutV2QuotesQuoteIdSourceLanguageMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/sourceLanguage', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdSourceLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdSourceLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].sourceLanguage.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdSourceLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdSourceLanguageMutationOptions<
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

export function getPutV2QuotesQuoteIdSpecializationMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/specialization', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdSpecializationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdSpecializationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].specialization.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdSpecialization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdSpecializationMutationOptions<
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

export function getPutV2QuotesQuoteIdStatusMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/status', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].status.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV2QuotesQuoteIdTargetLanguagesMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/targetLanguages', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdTargetLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdTargetLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].targetLanguages.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdTargetLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdTargetLanguagesMutationOptions<
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

export function getPutV2QuotesQuoteIdVendorInstructionsMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/vendorInstructions', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdVendorInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdVendorInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].vendorInstructions.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdVendorInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdVendorInstructionsMutationOptions<
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

export function getPutV2QuotesQuoteIdVolumeMutationKey() {
  return ['v2', '/v2/quotes/:quoteId/volume', 'PUT'] as const
}

export function getPutV2QuotesQuoteIdVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2QuotesQuoteIdVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>,
    ) {
      return parseResponse(client.v2.quotes[':quoteId'].volume.$put(args, options))
    },
  })
}

export function createPutV2QuotesQuoteIdVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>,
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
    const mutationDefaults = getPutV2QuotesQuoteIdVolumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
