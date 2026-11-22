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
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.$get>>,
) {
  return ['accounting', '/accounting/customers/invoices', toValue(args)] as const
}

export function getAccountingCustomersInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCustomersInvoices<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.$post>,
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
  const mutationDefaults = getPostAccountingCustomersInvoicesMutationOptions<
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

export function usePostAccountingCustomersInvoicesDocuments<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.documents.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.documents.$post>,
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
  const mutationDefaults = getPostAccountingCustomersInvoicesDocumentsMutationOptions<
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

export function getAccountingCustomersInvoicesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.ids.$get>>,
) {
  return ['accounting', '/accounting/customers/invoices/ids', toValue(args)] as const
}

export function getAccountingCustomersInvoicesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.customers.invoices.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesIdsQueryKey>
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
          Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCustomersInvoicesSendReminders<
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
                Awaited<ReturnType<typeof client.accounting.customers.invoices.sendReminders.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>,
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
  const mutationDefaults = getPostAccountingCustomersInvoicesSendRemindersMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId', toValue(args)] as const
}

export function getAccountingCustomersInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingCustomersInvoicesInvoiceId<
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
  const mutationDefaults = getDeleteAccountingCustomersInvoicesInvoiceIdMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdDatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/dates', toValue(args)] as const
}

export function getAccountingCustomersInvoicesInvoiceIdDatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesInvoiceIdDates<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDatesQueryKey>
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
            ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices[':invoiceId'].dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
    >
  >,
) {
  return [
    'accounting',
    '/accounting/customers/invoices/:invoiceId/document',
    toValue(args),
  ] as const
}

export function getAccountingCustomersInvoicesInvoiceIdDocumentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].document.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesInvoiceIdDocument<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey>
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
              (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdDocumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices[':invoiceId'].document.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCustomersInvoicesInvoiceIdDuplicate<
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
  const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdDuplicateMutationOptions<
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

export function usePostAccountingCustomersInvoicesInvoiceIdDuplicateProForma<
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
    getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaMutationOptions<
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

export function getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
    >
  >,
) {
  return [
    'accounting',
    '/accounting/customers/invoices/:invoiceId/paymentTerms',
    toValue(args),
  ] as const
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesInvoiceIdPaymentTerms<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey>
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
              (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdPaymentTermsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
    >
  >,
) {
  return [
    'accounting',
    '/accounting/customers/invoices/:invoiceId/payments',
    toValue(args),
  ] as const
}

export function getAccountingCustomersInvoicesInvoiceIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.customers.invoices[':invoiceId'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCustomersInvoicesInvoiceIdPayments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey>
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
              (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCustomersInvoicesInvoiceIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.customers.invoices[':invoiceId'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingCustomersInvoicesInvoiceIdPayments<
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
  const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdPaymentsMutationOptions<
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

export function usePostAccountingCustomersInvoicesInvoiceIdSendReminder<
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
  const mutationDefaults = getPostAccountingCustomersInvoicesInvoiceIdSendReminderMutationOptions<
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

export function useDeleteAccountingCustomersPaymentsPaymentId<
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
  const mutationDefaults = getDeleteAccountingCustomersPaymentsPaymentIdMutationOptions<
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

export function getAccountingProvidersInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.$get>>,
) {
  return ['accounting', '/accounting/providers/invoices', toValue(args)] as const
}

export function getAccountingProvidersInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProvidersInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.providers.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProvidersInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountingProvidersInvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProvidersInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.providers.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingProvidersInvoices<
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
                Awaited<ReturnType<typeof client.accounting.providers.invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounting.providers.invoices.$post>,
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
  const mutationDefaults = getPostAccountingProvidersInvoicesMutationOptions<
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

export function getAccountingProvidersInvoicesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.ids.$get>>,
) {
  return ['accounting', '/accounting/providers/invoices/ids', toValue(args)] as const
}

export function getAccountingProvidersInvoicesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProvidersInvoicesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.providers.invoices.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProvidersInvoicesIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.providers.invoices.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountingProvidersInvoicesIdsQueryKey>
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
          Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProvidersInvoicesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.providers.invoices.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingProvidersInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>
  >,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId', toValue(args)] as const
}

export function getAccountingProvidersInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProvidersInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.providers.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountingProvidersInvoicesInvoiceId<
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
  const mutationDefaults = getDeleteAccountingProvidersInvoicesInvoiceIdMutationOptions<
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

export function getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
    >
  >,
) {
  return [
    'accounting',
    '/accounting/providers/invoices/:invoiceId/document',
    toValue(args),
  ] as const
}

export function getAccountingProvidersInvoicesInvoiceIdDocumentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].document.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProvidersInvoicesInvoiceIdDocument<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey>
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
              (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdDocumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.providers.invoices[':invoiceId'].document.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
    >
  >,
) {
  return [
    'accounting',
    '/accounting/providers/invoices/:invoiceId/payments',
    toValue(args),
  ] as const
}

export function getAccountingProvidersInvoicesInvoiceIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.providers.invoices[':invoiceId'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingProvidersInvoicesInvoiceIdPayments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
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
                    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey>
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
              (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingProvidersInvoicesInvoiceIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.providers.invoices[':invoiceId'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountingProvidersInvoicesInvoiceIdPayments<
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
  const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdPaymentsMutationOptions<
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

export function usePostAccountingProvidersInvoicesInvoiceIdSend<
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
  const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdSendMutationOptions<
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

export function usePostAccountingProvidersInvoicesInvoiceIdStatus<
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
  const mutationDefaults = getPostAccountingProvidersInvoicesInvoiceIdStatusMutationOptions<
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

export function useDeleteAccountingProvidersPaymentsPaymentId<
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
  const mutationDefaults = getDeleteAccountingProvidersPaymentsPaymentIdMutationOptions<
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

export function getBrowserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.$get>>,
) {
  return ['browser', '/browser', toValue(args)] as const
}

export function getBrowserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBrowser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>
          >,
          ReturnType<typeof getBrowserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowserCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.csv.$get>>,
) {
  return ['browser', '/browser/csv', toValue(args)] as const
}

export function getBrowserCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.csv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.csv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBrowserCsv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browser.csv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
          >,
          ReturnType<typeof getBrowserCsvQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrowserCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowserViewsDetailsForClassNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>
  >,
) {
  return ['browser', '/browser/views/details/for/:className', toValue(args)] as const
}

export function getBrowserViewsDetailsForClassNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsDetailsForClassNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views.details.for[':className'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsDetailsForClassName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsDetailsForClassNameQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsDetailsForClassNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsDetailsForClassNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views.details.for[':className'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowserViewsDetailsForClassNameViewIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
  >,
) {
  return ['browser', '/browser/views/details/for/:className/:viewId', toValue(args)] as const
}

export function getBrowserViewsDetailsForClassNameViewIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsDetailsForClassNameViewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views.details.for[':className'][':viewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsDetailsForClassNameViewId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
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
                    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
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
                    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBrowserViewsDetailsForClassNameViewIdQueryKey>
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
            ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsDetailsForClassNameViewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsDetailsForClassNameViewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views.details.for[':className'][':viewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBrowserViewsDetailsForClassNameViewId<
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
  const mutationDefaults = getPostBrowserViewsDetailsForClassNameViewIdMutationOptions<
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

export function getBrowserViewsForClassNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views.for)[':className']['$get']>>,
) {
  return ['browser', '/browser/views/for/:className', toValue(args)] as const
}

export function getBrowserViewsForClassNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views.for)[':className']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsForClassNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views.for[':className'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsForClassName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views.for)[':className']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsForClassNameQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsForClassNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsForClassNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views.for[':className'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBrowserViewsForClassName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBrowserViewsForClassNameMutationOptions<TError, TOnMutateResult>(
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

export function getBrowserViewsViewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views)[':viewId']['$get']>>,
) {
  return ['browser', '/browser/views/:viewId', toValue(args)] as const
}

export function getBrowserViewsViewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views)[':viewId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browser.views)[':viewId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBrowserViewsViewIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBrowserViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBrowserViewsViewIdMutationOptions<TError, TOnMutateResult>(
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

export function getBrowserViewsViewIdColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/columns', toValue(args)] as const
}

export function getBrowserViewsViewIdColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].columns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdColumnsQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].columns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdColumns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBrowserViewsViewIdColumnsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBrowserViewsViewIdColumnsColumnName<
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
  const mutationDefaults = getDeleteBrowserViewsViewIdColumnsColumnNameMutationOptions<
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

export function getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
    >
  >,
) {
  return ['browser', '/browser/views/:viewId/columns/:columnName/settings', toValue(args)] as const
}

export function getBrowserViewsViewIdColumnsColumnNameSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].columns[':columnName'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdColumnsColumnNameSettings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
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
                    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
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
                    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey>
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
              (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdColumnsColumnNameSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].columns[':columnName'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdColumnsColumnNameSettings<
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
  const mutationDefaults = getPutBrowserViewsViewIdColumnsColumnNameSettingsMutationOptions<
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

export function getBrowserViewsViewIdFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/filter', toValue(args)] as const
}

export function getBrowserViewsViewIdFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].filter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].filter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBrowserViewsViewIdFilterMutationOptions<TError, TOnMutateResult>(
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

export function usePutBrowserViewsViewIdFilterFilterProperty<
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
  const mutationDefaults = getPutBrowserViewsViewIdFilterFilterPropertyMutationOptions<
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

export function getBrowserViewsViewIdOrderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/order', toValue(args)] as const
}

export function getBrowserViewsViewIdOrderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].order.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdOrderQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBrowserViewsViewIdOrderMutationOptions<TError, TOnMutateResult>(
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

export function getBrowserViewsViewIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/permissions', toValue(args)] as const
}

export function getBrowserViewsViewIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdPermissions<
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
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>,
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
  const mutationDefaults = getPutBrowserViewsViewIdPermissionsMutationOptions<
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

export function getBrowserViewsViewIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/settings', toValue(args)] as const
}

export function getBrowserViewsViewIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBrowserViewsViewIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getBrowserViewsViewIdSettingsLocalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
  >,
) {
  return ['browser', '/browser/views/:viewId/settings/local', toValue(args)] as const
}

export function getBrowserViewsViewIdSettingsLocalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowserViewsViewIdSettingsLocalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browser.views[':viewId'].settings.local.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowserViewsViewIdSettingsLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBrowserViewsViewIdSettingsLocalQueryKey>
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
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowserViewsViewIdSettingsLocalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowserViewsViewIdSettingsLocalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browser.views[':viewId'].settings.local.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBrowserViewsViewIdSettingsLocal<
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
                  ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>,
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
  const mutationDefaults = getPutBrowserViewsViewIdSettingsLocalMutationOptions<
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

export function getCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
) {
  return ['customers', '/customers', toValue(args)] as const
}

export function getCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          ReturnType<typeof getCustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
  const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomersIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.ids.$get>>,
) {
  return ['customers', '/customers/ids', toValue(args)] as const
}

export function getCustomersIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
          >,
          ReturnType<typeof getCustomersIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomersPersons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.customers.persons.$post>,
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
  const mutationDefaults = getPostCustomersPersonsMutationOptions<TError, TOnMutateResult>(
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

export function usePostCustomersPersonsAccessToken<
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
                Awaited<ReturnType<typeof client.customers.persons.accessToken.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.customers.persons.accessToken.$post>,
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
  const mutationDefaults = getPostCustomersPersonsAccessTokenMutationOptions<
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

export function getCustomersPersonsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.persons.ids.$get>>,
) {
  return ['customers', '/customers/persons/ids', toValue(args)] as const
}

export function getCustomersPersonsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.persons.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersPersonsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.persons.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersPersonsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.persons.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
            >
          >,
          ReturnType<typeof getCustomersPersonsIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersPersonsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.persons.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersPersonsPersonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers.persons)[':personId']['$get']>>,
) {
  return ['customers', '/customers/persons/:personId', toValue(args)] as const
}

export function getCustomersPersonsPersonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers.persons)[':personId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersPersonsPersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.persons[':personId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers.persons)[':personId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersPersonsPersonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersPersonsPersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.persons[':personId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomersPersonsPersonIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCustomersPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCustomersPersonsPersonIdMutationOptions<
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

export function getCustomersPersonsPersonIdContactQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>
  >,
) {
  return ['customers', '/customers/persons/:personId/contact', toValue(args)] as const
}

export function getCustomersPersonsPersonIdContactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersPersonsPersonIdContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.persons[':personId'].contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersPersonsPersonIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersPersonsPersonIdContactQueryKey>
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
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersPersonsPersonIdContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.persons[':personId'].contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersPersonsPersonIdContact<
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
                  ReturnType<(typeof client.customers.persons)[':personId']['contact']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>,
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
  const mutationDefaults = getPutCustomersPersonsPersonIdContactMutationOptions<
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

export function getCustomersPersonsPersonIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
  >,
) {
  return ['customers', '/customers/persons/:personId/customFields', toValue(args)] as const
}

export function getCustomersPersonsPersonIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersPersonsPersonIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.persons[':personId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersPersonsPersonIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersPersonsPersonIdCustomFieldsQueryKey>
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
            ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPersonsPersonIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersPersonsPersonIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.persons[':personId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersPersonsPersonIdCustomFields<
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
                  ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$put']>,
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
  const mutationDefaults = getPutCustomersPersonsPersonIdCustomFieldsMutationOptions<
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

export function useDeleteCustomersPriceListsPriceListId<
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
                    ReturnType<(typeof client.customers.priceLists)[':priceListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>,
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
  const mutationDefaults = getDeleteCustomersPriceListsPriceListIdMutationOptions<
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

export function getCustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customerId']['$get']>>,
) {
  return ['customers', '/customers/:customerId', toValue(args)] as const
}

export function getCustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':customerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersCustomerIdAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/address', toValue(args)] as const
}

export function getCustomersCustomerIdAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].address.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].address.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomersCustomerIdAddressMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersCustomerIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/categories', toValue(args)] as const
}

export function getCustomersCustomerIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdCategories<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>,
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
  const mutationDefaults = getPutCustomersCustomerIdCategoriesMutationOptions<
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

export function getCustomersCustomerIdContactQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/contact', toValue(args)] as const
}

export function getCustomersCustomerIdContactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdContactQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomersCustomerIdContactMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersCustomerIdCorrespondenceAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/correspondenceAddress', toValue(args)] as const
}

export function getCustomersCustomerIdCorrespondenceAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdCorrespondenceAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].correspondenceAddress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdCorrespondenceAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
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
                    (typeof client.customers)[':customerId']['correspondenceAddress']['$get']
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
                    (typeof client.customers)[':customerId']['correspondenceAddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdCorrespondenceAddressQueryKey>
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
            ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCorrespondenceAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdCorrespondenceAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].correspondenceAddress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdCorrespondenceAddress<
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
  const mutationDefaults = getPutCustomersCustomerIdCorrespondenceAddressMutationOptions<
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

export function getCustomersCustomerIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/customFields', toValue(args)] as const
}

export function getCustomersCustomerIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdCustomFields<
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
                  ReturnType<(typeof client.customers)[':customerId']['customFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>,
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
  const mutationDefaults = getPutCustomersCustomerIdCustomFieldsMutationOptions<
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

export function getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
    >
  >,
) {
  return [
    'customers',
    '/customers/:customerId/customFields/:customFieldKey',
    toValue(args),
  ] as const
}

export function getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].customFields[':customFieldKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdCustomFieldsCustomFieldKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
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
                    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
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
                    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey>
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
              (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdCustomFieldsCustomFieldKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].customFields[':customFieldKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdCustomFieldsCustomFieldKey<
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
  const mutationDefaults = getPutCustomersCustomerIdCustomFieldsCustomFieldKeyMutationOptions<
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

export function getCustomersCustomerIdIndustriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>
  >,
) {
  return ['customers', '/customers/:customerId/industries', toValue(args)] as const
}

export function getCustomersCustomerIdIndustriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersCustomerIdIndustriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':customerId'].industries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersCustomerIdIndustries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersCustomerIdIndustriesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdIndustriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersCustomerIdIndustriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':customerId'].industries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersCustomerIdIndustries<
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
                Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>,
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
  const mutationDefaults = getPutCustomersCustomerIdIndustriesMutationOptions<
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

export function getDictionariesActiveQueryKey() {
  return ['dictionaries', '/dictionaries/active'] as const
}

export function getDictionariesActiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDictionariesActiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries.active.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDictionariesActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>
            >
          >,
          ReturnType<typeof getDictionariesActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDictionariesActiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries.active.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDictionariesAllQueryKey() {
  return ['dictionaries', '/dictionaries/all'] as const
}

export function getDictionariesAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDictionariesAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDictionariesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>
            >
          >,
          ReturnType<typeof getDictionariesAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDictionariesAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDictionariesCurrencyIsoCodeExchangeRateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
  >,
) {
  return ['dictionaries', '/dictionaries/currency/:isoCode/exchangeRate', toValue(args)] as const
}

export function getDictionariesCurrencyIsoCodeExchangeRateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDictionariesCurrencyIsoCodeExchangeRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries.currency[':isoCode'].exchangeRate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDictionariesCurrencyIsoCodeExchangeRate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
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
                    (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']
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
                    (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDictionariesCurrencyIsoCodeExchangeRateQueryKey>
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
            ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesCurrencyIsoCodeExchangeRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDictionariesCurrencyIsoCodeExchangeRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries.currency[':isoCode'].exchangeRate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDictionariesCurrencyIsoCodeExchangeRate<
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
  const mutationDefaults = getPostDictionariesCurrencyIsoCodeExchangeRateMutationOptions<
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

export function getDictionariesTypeActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>>,
) {
  return ['dictionaries', '/dictionaries/:type/active', toValue(args)] as const
}

export function getDictionariesTypeActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDictionariesTypeActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries[':type'].active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDictionariesTypeActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDictionariesTypeActiveQueryKey>
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
          Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDictionariesTypeActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries[':type'].active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDictionariesTypeAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>>,
) {
  return ['dictionaries', '/dictionaries/:type/all', toValue(args)] as const
}

export function getDictionariesTypeAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDictionariesTypeAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries[':type'].all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDictionariesTypeAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDictionariesTypeAllQueryKey>
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
          Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDictionariesTypeAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries[':type'].all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDictionariesTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>>,
) {
  return ['dictionaries', '/dictionaries/:type/:id', toValue(args)] as const
}

export function getDictionariesTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDictionariesTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dictionaries[':type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDictionariesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDictionariesTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDictionariesTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDictionariesTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dictionaries[':type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
) {
  return ['jobs', '/jobs/:jobId', toValue(args)] as const
}

export function getJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsJobIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutJobsJobIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutJobsJobIdDatesMutationOptions<TError, TOnMutateResult>(
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

export function getJobsJobIdFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>>,
) {
  return ['jobs', '/jobs/:jobId/files', toValue(args)] as const
}

export function getJobsJobIdFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsJobIdFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostJobsJobIdFilesOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostJobsJobIdFilesOutputMutationOptions<TError, TOnMutateResult>(
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

export function getJobsJobIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>
  >,
) {
  return ['jobs', '/jobs/:jobId/files/:fileId', toValue(args)] as const
}

export function getJobsJobIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsJobIdFilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutJobsJobIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutJobsJobIdInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function usePutJobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutJobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function usePutJobsJobIdVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutJobsJobIdVendorMutationOptions<TError, TOnMutateResult>(
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

export function getLicenseQueryKey() {
  return ['license', '/license'] as const
}

export function getLicenseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicenseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
          >,
          ReturnType<typeof getLicenseQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicenseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.license.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLicenseRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.license.refresh.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostLicenseRefreshMutationOptions<TError, TOnMutateResult>(
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

export function usePostMacrosMacroIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostMacrosMacroIdRunMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsFilesFileIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>
  >,
) {
  return ['projects', '/projects/files/:fileId/download', toValue(args)] as const
}

export function getProjectsFilesFileIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsFilesFileIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.files[':fileId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsFilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsFilesFileIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsFilesFileIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsFilesFileIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.files[':fileId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.ids.$get>>,
) {
  return ['projects', '/projects/ids', toValue(args)] as const
}

export function getProjectsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
          >,
          ReturnType<typeof getProjectsIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
) {
  return ['projects', '/projects/:projectId', toValue(args)] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/contacts', toValue(args)] as const
}

export function getProjectsProjectIdContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProjectsProjectIdContactsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/customFields', toValue(args)] as const
}

export function getProjectsProjectIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdCustomFields<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdCustomFieldsMutationOptions<
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

export function getProjectsProjectIdDatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>>,
) {
  return ['projects', '/projects/:projectId/dates', toValue(args)] as const
}

export function getProjectsProjectIdDatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProjectsProjectIdDatesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdFinanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/finance', toValue(args)] as const
}

export function getProjectsProjectIdFinanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdFinanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].finance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdFinanceQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdFinanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdFinanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].finance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdFinancePayables<
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
                  ReturnType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdFinancePayablesMutationOptions<
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

export function usePutProjectsProjectIdFinancePayablesPayableId<
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
  const mutationDefaults = getPutProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function useDeleteProjectsProjectIdFinancePayablesPayableId<
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
  const mutationDefaults = getDeleteProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function usePostProjectsProjectIdFinanceReceivables<
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
  const mutationDefaults = getPostProjectsProjectIdFinanceReceivablesMutationOptions<
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

export function usePutProjectsProjectIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getPutProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function useDeleteProjectsProjectIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getDeleteProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getProjectsProjectIdInstructionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/instructions', toValue(args)] as const
}

export function getProjectsProjectIdInstructionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdInstructionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].instructions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdInstructionsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdInstructionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdInstructionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].instructions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdInstructions<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdInstructionsMutationOptions<
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

export function usePostProjectsProjectIdLanguageCombinations<
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
                    (typeof client.projects)[':projectId']['languageCombinations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdLanguageCombinationsMutationOptions<
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

export function usePostProjectsProjectIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProjectsProjectIdTasksMutationOptions<TError, TOnMutateResult>(
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

export function getProvidersIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.ids.$get>>,
) {
  return ['providers', '/providers/ids', toValue(args)] as const
}

export function getProvidersIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
          >,
          ReturnType<typeof getProvidersIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersPersonsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.persons.ids.$get>>,
) {
  return ['providers', '/providers/persons/ids', toValue(args)] as const
}

export function getProvidersPersonsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.persons.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersPersonsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.persons.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersPersonsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.persons.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
            >
          >,
          ReturnType<typeof getProvidersPersonsIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersPersonsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.persons.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersPersonsPersonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers.persons)[':personId']['$get']>>,
) {
  return ['providers', '/providers/persons/:personId', toValue(args)] as const
}

export function getProvidersPersonsPersonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers.persons)[':personId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersPersonsPersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.persons[':personId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers.persons)[':personId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersPersonsPersonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersPersonsPersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.persons[':personId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProvidersPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProvidersPersonsPersonIdMutationOptions<
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

export function getProvidersPersonsPersonIdContactQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>
  >,
) {
  return ['providers', '/providers/persons/:personId/contact', toValue(args)] as const
}

export function getProvidersPersonsPersonIdContactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersPersonsPersonIdContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.persons[':personId'].contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersPersonsPersonIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersPersonsPersonIdContactQueryKey>
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
          Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersPersonsPersonIdContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.persons[':personId'].contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersPersonsPersonIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
  >,
) {
  return ['providers', '/providers/persons/:personId/customFields', toValue(args)] as const
}

export function getProvidersPersonsPersonIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersPersonsPersonIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.persons[':personId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersPersonsPersonIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersPersonsPersonIdCustomFieldsQueryKey>
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
            ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersPersonsPersonIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersPersonsPersonIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.persons[':personId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProvidersPersonsPersonIdNotificationInvitation<
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
  const mutationDefaults = getPostProvidersPersonsPersonIdNotificationInvitationMutationOptions<
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

export function useDeleteProvidersPriceListsPriceListId<
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
                    ReturnType<(typeof client.providers.priceLists)[':priceListId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>,
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
  const mutationDefaults = getDeleteProvidersPriceListsPriceListIdMutationOptions<
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

export function getProvidersProviderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
) {
  return ['providers', '/providers/:providerId', toValue(args)] as const
}

export function getProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProvidersProviderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProvidersProviderIdMutationOptions<TError, TOnMutateResult>(
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

export function getProvidersProviderIdAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>
  >,
) {
  return ['providers', '/providers/:providerId/address', toValue(args)] as const
}

export function getProvidersProviderIdAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].address.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderIdAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].address.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersProviderIdCompetenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>
  >,
) {
  return ['providers', '/providers/:providerId/competencies', toValue(args)] as const
}

export function getProvidersProviderIdCompetenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdCompetenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].competencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderIdCompetencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdCompetenciesQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCompetenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdCompetenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].competencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersProviderIdContactQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>
  >,
) {
  return ['providers', '/providers/:providerId/contact', toValue(args)] as const
}

export function getProvidersProviderIdContactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdContactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].contact.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderIdContact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdContactQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdContactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdContactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].contact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersProviderIdCorrespondenceAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
  >,
) {
  return ['providers', '/providers/:providerId/correspondenceAddress', toValue(args)] as const
}

export function getProvidersProviderIdCorrespondenceAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdCorrespondenceAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].correspondenceAddress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderIdCorrespondenceAddress<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
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
                    (typeof client.providers)[':providerId']['correspondenceAddress']['$get']
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
                    (typeof client.providers)[':providerId']['correspondenceAddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdCorrespondenceAddressQueryKey>
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
            ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCorrespondenceAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdCorrespondenceAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].correspondenceAddress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersProviderIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>
  >,
) {
  return ['providers', '/providers/:providerId/customFields', toValue(args)] as const
}

export function getProvidersProviderIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProvidersProviderIdNotificationInvitation<
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
  const mutationDefaults = getPostProvidersProviderIdNotificationInvitationMutationOptions<
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

export function getQuotesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.ids.$get>>,
) {
  return ['quotes', '/quotes/ids', toValue(args)] as const
}

export function getQuotesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes.ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuotesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>
          >,
          ReturnType<typeof getQuotesIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesQuoteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['$get']>>,
) {
  return ['quotes', '/quotes/:quoteId', toValue(args)] as const
}

export function getQuotesQuoteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':quoteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
            >
          >,
          ReturnType<typeof getQuotesQuoteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':quoteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteQuotesQuoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteQuotesQuoteIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostQuotesQuoteIdConfirmationSend<
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
                    ReturnType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIdConfirmationSendMutationOptions<
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

export function getQuotesQuoteIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>
  >,
) {
  return ['quotes', '/quotes/:quoteId/customFields', toValue(args)] as const
}

export function getQuotesQuoteIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':quoteId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':quoteId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutQuotesQuoteIdCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutQuotesQuoteIdCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getQuotesQuoteIdDatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>>,
) {
  return ['quotes', '/quotes/:quoteId/dates', toValue(args)] as const
}

export function getQuotesQuoteIdDatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIdDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':quoteId'].dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIdDatesQueryKey>
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
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIdDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':quoteId'].dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesQuoteIdFinanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>>,
) {
  return ['quotes', '/quotes/:quoteId/finance', toValue(args)] as const
}

export function getQuotesQuoteIdFinanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIdFinanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':quoteId'].finance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIdFinanceQueryKey>
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
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdFinanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIdFinanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':quoteId'].finance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQuotesQuoteIdFinancePayables<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIdFinancePayablesMutationOptions<
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

export function usePutQuotesQuoteIdFinancePayablesPayableId<
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
  const mutationDefaults = getPutQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function useDeleteQuotesQuoteIdFinancePayablesPayableId<
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
  const mutationDefaults = getDeleteQuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function usePostQuotesQuoteIdFinanceReceivables<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIdFinanceReceivablesMutationOptions<
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

export function usePutQuotesQuoteIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getPutQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function useDeleteQuotesQuoteIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function getQuotesQuoteIdInstructionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>
  >,
) {
  return ['quotes', '/quotes/:quoteId/instructions', toValue(args)] as const
}

export function getQuotesQuoteIdInstructionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQuoteIdInstructionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':quoteId'].instructions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesQuoteIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesQuoteIdInstructionsQueryKey>
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
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesQuoteIdInstructionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQuoteIdInstructionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':quoteId'].instructions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutQuotesQuoteIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutQuotesQuoteIdInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostQuotesQuoteIdLanguageCombinations<
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
                  ReturnType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>,
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
  const mutationDefaults = getPostQuotesQuoteIdLanguageCombinationsMutationOptions<
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

export function usePostQuotesQuoteIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostQuotesQuoteIdStartMutationOptions<TError, TOnMutateResult>(
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

export function usePostQuotesQuoteIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostQuotesQuoteIdTasksMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsExportXml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.export.xml.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.export.xml.$post>,
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
  const mutationDefaults = getPostReportsExportXmlMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsImportXml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.import.xml.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.import.xml.$post>,
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
  const mutationDefaults = getPostReportsImportXmlMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteReportsReportIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsReportIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostReportsReportIdDuplicateMutationOptions<TError, TOnMutateResult>(
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

export function usePutReportsReportIdPreferred<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutReportsReportIdPreferredMutationOptions<TError, TOnMutateResult>(
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

export function getReportsReportIdResultCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>
  >,
) {
  return ['reports', '/reports/:reportId/result/csv', toValue(args)] as const
}

export function getReportsReportIdResultCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIdResultCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':reportId'].result.csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsReportIdResultCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportIdResultCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdResultCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIdResultCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':reportId'].result.csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsReportIdResultPrinterFriendlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
  >,
) {
  return ['reports', '/reports/:reportId/result/printerFriendly', toValue(args)] as const
}

export function getReportsReportIdResultPrinterFriendlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIdResultPrinterFriendlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':reportId'].result.printerFriendly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsReportIdResultPrinterFriendly<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
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
                    (typeof client.reports)[':reportId']['result']['printerFriendly']['$get']
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
                    (typeof client.reports)[':reportId']['result']['printerFriendly']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getReportsReportIdResultPrinterFriendlyQueryKey>
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
            ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdResultPrinterFriendlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIdResultPrinterFriendlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':reportId'].result.printerFriendly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.active.$get>>,
) {
  return ['services', '/services/active', toValue(args)] as const
}

export function getServicesActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>
            >
          >,
          ReturnType<typeof getServicesActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.all.$get>>,
) {
  return ['services', '/services/all', toValue(args)] as const
}

export function getServicesAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServicesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
          >,
          ReturnType<typeof getServicesAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionQueryKey() {
  return ['subscription', '/subscription'] as const
}

export function getSubscriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSubscriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
          >,
          ReturnType<typeof getSubscriptionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSubscriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscription.$post>,
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
  const mutationDefaults = getPostSubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionSupportsQueryKey() {
  return ['subscription', '/subscription/supports'] as const
}

export function getSubscriptionSupportsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSubscriptionSupportsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription.supports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionSupports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionSupportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionSupportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSubscriptionSupportsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription.supports.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSubscriptionSubscriptionId<
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
                Awaited<ReturnType<(typeof client.subscription)[':subscriptionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>,
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
  const mutationDefaults = getDeleteSubscriptionSubscriptionIdMutationOptions<
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

export function useDeleteTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteTasksTaskIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutTasksTaskIdClientTaskPONumber<
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
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>,
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
  const mutationDefaults = getPutTasksTaskIdClientTaskPONumberMutationOptions<
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

export function getTasksTaskIdContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>>,
) {
  return ['tasks', '/tasks/:taskId/contacts', toValue(args)] as const
}

export function getTasksTaskIdContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTasksTaskIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutTasksTaskIdContactsMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>
  >,
) {
  return ['tasks', '/tasks/:taskId/customFields', toValue(args)] as const
}

export function getTasksTaskIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTasksTaskIdCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutTasksTaskIdCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdDatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>>,
) {
  return ['tasks', '/tasks/:taskId/dates', toValue(args)] as const
}

export function getTasksTaskIdDatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdDatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTasksTaskIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutTasksTaskIdDatesMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>>,
) {
  return ['tasks', '/tasks/:taskId/files', toValue(args)] as const
}

export function getTasksTaskIdFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIdFilesInput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTasksTaskIdFilesInputMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdInstructionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>
  >,
) {
  return ['tasks', '/tasks/:taskId/instructions', toValue(args)] as const
}

export function getTasksTaskIdInstructionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdInstructionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].instructions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdInstructionsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdInstructionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdInstructionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].instructions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTasksTaskIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutTasksTaskIdInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function usePutTasksTaskIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutTasksTaskIdNameMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIdProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>>,
) {
  return ['tasks', '/tasks/:taskId/progress', toValue(args)] as const
}

export function getTasksTaskIdProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIdProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTasksTaskIdStartMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeTimeZoneQueryKey() {
  return ['users', '/users/me/timeZone'] as const
}

export function getUsersMeTimeZoneQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeTimeZoneQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.timeZone.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeTimeZone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeTimeZoneQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeTimeZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeTimeZoneQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.timeZone.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>
  >,
) {
  return ['users', '/users/:userId/customFields', toValue(args)] as const
}

export function getUsersUserIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserIdCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutUsersUserIdCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdCustomFieldsCustomFieldKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
  >,
) {
  return ['users', '/users/:userId/customFields/:customFieldKey', toValue(args)] as const
}

export function getUsersUserIdCustomFieldsCustomFieldKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCustomFieldsCustomFieldKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].customFields[':customFieldKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdCustomFieldsCustomFieldKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
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
                    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
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
                    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCustomFieldsCustomFieldKeyQueryKey>
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
            ReturnType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCustomFieldsCustomFieldKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCustomFieldsCustomFieldKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].customFields[':customFieldKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserIdCustomFieldsCustomFieldKey<
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
  const mutationDefaults = getPutUsersUserIdCustomFieldsCustomFieldKeyMutationOptions<
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

export function usePutUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getV2JobsForExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>>,
) {
  return ['v2', '/v2/jobs/for-external-id', toValue(args)] as const
}

export function getV2JobsForExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2JobsForExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.jobs['for-external-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2JobsForExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2JobsForExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsForExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2JobsForExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.jobs['for-external-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2JobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>>,
) {
  return ['v2', '/v2/jobs/:jobId', toValue(args)] as const
}

export function getV2JobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2JobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2JobsJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2JobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2JobsJobIdDates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2JobsJobIdDatesMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2JobsJobIdFilesAddExternalLink<
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
                  ReturnType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>,
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
  const mutationDefaults = getPostV2JobsJobIdFilesAddExternalLinkMutationOptions<
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

export function getV2JobsJobIdFilesDeliveredQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>
  >,
) {
  return ['v2', '/v2/jobs/:jobId/files/delivered', toValue(args)] as const
}

export function getV2JobsJobIdFilesDeliveredQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2JobsJobIdFilesDeliveredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.delivered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2JobsJobIdFilesDelivered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2JobsJobIdFilesDeliveredQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesDeliveredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2JobsJobIdFilesDeliveredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.jobs[':jobId'].files.delivered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2JobsJobIdFilesDeliveredAdd<
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
  const mutationDefaults = getPutV2JobsJobIdFilesDeliveredAddMutationOptions<
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

export function usePostV2JobsJobIdFilesDeliveredAddLink<
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
  const mutationDefaults = getPostV2JobsJobIdFilesDeliveredAddLinkMutationOptions<
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

export function usePostV2JobsJobIdFilesDeliveredUpload<
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
  const mutationDefaults = getPostV2JobsJobIdFilesDeliveredUploadMutationOptions<
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

export function getV2JobsJobIdFilesSharedReferenceFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
  >,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedReferenceFiles', toValue(args)] as const
}

export function getV2JobsJobIdFilesSharedReferenceFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2JobsJobIdFilesSharedReferenceFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2JobsJobIdFilesSharedReferenceFiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
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
                    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
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
                    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2JobsJobIdFilesSharedReferenceFilesQueryKey>
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
            ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesSharedReferenceFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2JobsJobIdFilesSharedReferenceFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2JobsJobIdFilesSharedReferenceFilesShare<
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
  const mutationDefaults = getPutV2JobsJobIdFilesSharedReferenceFilesShareMutationOptions<
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

export function getV2JobsJobIdFilesSharedWorkFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
  >,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedWorkFiles', toValue(args)] as const
}

export function getV2JobsJobIdFilesSharedWorkFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2JobsJobIdFilesSharedWorkFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2JobsJobIdFilesSharedWorkFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2JobsJobIdFilesSharedWorkFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2JobsJobIdFilesSharedWorkFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2JobsJobIdFilesSharedWorkFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2JobsJobIdFilesSharedWorkFilesShare<
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
  const mutationDefaults = getPutV2JobsJobIdFilesSharedWorkFilesShareMutationOptions<
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

export function usePutV2JobsJobIdFilesStopSharing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2JobsJobIdFilesStopSharingMutationOptions<
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

export function usePutV2JobsJobIdInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2JobsJobIdInstructionsMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2JobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2JobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2JobsJobIdVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2JobsJobIdVendorMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.projects.$post>,
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
  const mutationDefaults = getPostV2ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2ProjectsFilesArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV2ProjectsFilesArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getV2ProjectsFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>>,
) {
  return ['v2', '/v2/projects/files/:fileId', toValue(args)] as const
}

export function getV2ProjectsFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsFilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsFilesFileIdDownloadFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']>
  >,
) {
  return ['v2', '/v2/projects/files/:fileId/download/:fileName', toValue(args)] as const
}

export function getV2ProjectsFilesFileIdDownloadFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsFilesFileIdDownloadFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.files[':fileId'].download[':fileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsFilesFileIdDownloadFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']>
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
                    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
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
                    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsFilesFileIdDownloadFileNameQueryKey>
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
              (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsFilesFileIdDownloadFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsFilesFileIdDownloadFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.files[':fileId'].download[':fileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsForExternalIdExternalProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
  >,
) {
  return ['v2', '/v2/projects/for-external-id/:externalProjectId', toValue(args)] as const
}

export function getV2ProjectsForExternalIdExternalProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsForExternalIdExternalProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects['for-external-id'][':externalProjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsForExternalIdExternalProjectId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
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
                    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
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
                    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsForExternalIdExternalProjectIdQueryKey>
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
            ReturnType<(typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsForExternalIdExternalProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsForExternalIdExternalProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects['for-external-id'][':externalProjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>>,
) {
  return ['v2', '/v2/projects/:projectId', toValue(args)] as const
}

export function getV2ProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2ProjectsProjectIdAddJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV2ProjectsProjectIdAddJobMutationOptions<TError, TOnMutateResult>(
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

export function getV2ProjectsProjectIdCatToolProjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/catToolProject', toValue(args)] as const
}

export function getV2ProjectsProjectIdCatToolProjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdCatToolProjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].catToolProject.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdCatToolProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdCatToolProjectQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdCatToolProjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdCatToolProjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].catToolProject.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsProjectIdClientContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/clientContacts', toValue(args)] as const
}

export function getV2ProjectsProjectIdClientContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdClientContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].clientContacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdClientContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdClientContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdClientContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdClientContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].clientContacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2ProjectsProjectIdClientContacts<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdClientContactsMutationOptions<
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

export function usePutV2ProjectsProjectIdClientDeadline<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdClientDeadlineMutationOptions<
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

export function usePutV2ProjectsProjectIdClientNotes<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdClientNotesMutationOptions<
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

export function usePutV2ProjectsProjectIdClientReferenceNumber<
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
  const mutationDefaults = getPutV2ProjectsProjectIdClientReferenceNumberMutationOptions<
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

export function getV2ProjectsProjectIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/customFields', toValue(args)] as const
}

export function getV2ProjectsProjectIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2ProjectsProjectIdCustomFieldsKey<
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
  const mutationDefaults = getPutV2ProjectsProjectIdCustomFieldsKeyMutationOptions<
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

export function getV2ProjectsProjectIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/files', toValue(args)] as const
}

export function getV2ProjectsProjectIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2ProjectsProjectIdFilesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2ProjectsProjectIdFilesAddMutationOptions<
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

export function usePostV2ProjectsProjectIdFilesAddExternalLink<
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
  const mutationDefaults = getPostV2ProjectsProjectIdFilesAddExternalLinkMutationOptions<
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

export function usePostV2ProjectsProjectIdFilesAddLink<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>,
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
  const mutationDefaults = getPostV2ProjectsProjectIdFilesAddLinkMutationOptions<
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

export function getV2ProjectsProjectIdFilesDeliverableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/files/deliverable', toValue(args)] as const
}

export function getV2ProjectsProjectIdFilesDeliverableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdFilesDeliverableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].files.deliverable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdFilesDeliverable<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
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
                    (typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']
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
                    (typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdFilesDeliverableQueryKey>
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
            ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFilesDeliverableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdFilesDeliverableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].files.deliverable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2ProjectsProjectIdFilesUpload<
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
                  ReturnType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>,
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
  const mutationDefaults = getPostV2ProjectsProjectIdFilesUploadMutationOptions<
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

export function getV2ProjectsProjectIdFinanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/finance', toValue(args)] as const
}

export function getV2ProjectsProjectIdFinanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdFinanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].finance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdFinanceQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdFinanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdFinanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].finance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2ProjectsProjectIdFinancePayables<
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
  const mutationDefaults = getPostV2ProjectsProjectIdFinancePayablesMutationOptions<
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

export function usePutV2ProjectsProjectIdFinancePayablesPayableId<
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
  const mutationDefaults = getPutV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function useDeleteV2ProjectsProjectIdFinancePayablesPayableId<
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
  const mutationDefaults = getDeleteV2ProjectsProjectIdFinancePayablesPayableIdMutationOptions<
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

export function usePostV2ProjectsProjectIdFinanceReceivables<
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
  const mutationDefaults = getPostV2ProjectsProjectIdFinanceReceivablesMutationOptions<
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

export function usePutV2ProjectsProjectIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function useDeleteV2ProjectsProjectIdFinanceReceivablesReceivableId<
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
    getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdMutationOptions<
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

export function usePutV2ProjectsProjectIdInternalNotes<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdInternalNotesMutationOptions<
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

export function getV2ProjectsProjectIdJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/jobs', toValue(args)] as const
}

export function getV2ProjectsProjectIdJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2ProjectsProjectIdOrderDate<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdOrderDateMutationOptions<
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

export function getV2ProjectsProjectIdProcessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:projectId/process', toValue(args)] as const
}

export function getV2ProjectsProjectIdProcessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdProcessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':projectId'].process.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdProcess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdProcessQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdProcessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdProcessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':projectId'].process.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2ProjectsProjectIdSourceLanguage<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdSourceLanguageMutationOptions<
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

export function usePutV2ProjectsProjectIdSpecialization<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdSpecializationMutationOptions<
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

export function usePutV2ProjectsProjectIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2ProjectsProjectIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2ProjectsProjectIdTargetLanguages<
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
                    ReturnType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdTargetLanguagesMutationOptions<
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

export function usePutV2ProjectsProjectIdVendorInstructions<
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
  const mutationDefaults = getPutV2ProjectsProjectIdVendorInstructionsMutationOptions<
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

export function usePutV2ProjectsProjectIdVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2ProjectsProjectIdVolumeMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2Quotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.quotes.$post>,
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
  const mutationDefaults = getPostV2QuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2QuotesFilesArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.files.archive.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.quotes.files.archive.$post>,
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
  const mutationDefaults = getPostV2QuotesFilesArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getV2QuotesFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>>,
) {
  return ['v2', '/v2/quotes/files/:fileId', toValue(args)] as const
}

export function getV2QuotesFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes.files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesFilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes.files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2QuotesFilesFileIdDownloadFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
  >,
) {
  return ['v2', '/v2/quotes/files/:fileId/download/:fileName', toValue(args)] as const
}

export function getV2QuotesFilesFileIdDownloadFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesFilesFileIdDownloadFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes.files[':fileId'].download[':fileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesFilesFileIdDownloadFileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
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
                    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
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
                    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2QuotesFilesFileIdDownloadFileNameQueryKey>
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
            ReturnType<(typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesFilesFileIdDownloadFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesFilesFileIdDownloadFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes.files[':fileId'].download[':fileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2QuotesQuoteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>>,
) {
  return ['v2', '/v2/quotes/:quoteId', toValue(args)] as const
}

export function getV2QuotesQuoteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2QuotesQuoteIdBusinessDays<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdBusinessDaysMutationOptions<
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

export function getV2QuotesQuoteIdClientContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>
  >,
) {
  return ['v2', '/v2/quotes/:quoteId/clientContacts', toValue(args)] as const
}

export function getV2QuotesQuoteIdClientContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdClientContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].clientContacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteIdClientContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdClientContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdClientContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdClientContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].clientContacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2QuotesQuoteIdClientContacts<
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
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdClientContactsMutationOptions<
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

export function usePutV2QuotesQuoteIdClientNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdClientNotesMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2QuotesQuoteIdClientReferenceNumber<
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
  const mutationDefaults = getPutV2QuotesQuoteIdClientReferenceNumberMutationOptions<
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

export function getV2QuotesQuoteIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>
  >,
) {
  return ['v2', '/v2/quotes/:quoteId/customFields', toValue(args)] as const
}

export function getV2QuotesQuoteIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdCustomFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2QuotesQuoteIdCustomFieldsKey<
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
  const mutationDefaults = getPutV2QuotesQuoteIdCustomFieldsKeyMutationOptions<
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

export function usePutV2QuotesQuoteIdExpectedDeliveryDate<
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
  const mutationDefaults = getPutV2QuotesQuoteIdExpectedDeliveryDateMutationOptions<
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

export function getV2QuotesQuoteIdFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>,
) {
  return ['v2', '/v2/quotes/:quoteId/files', toValue(args)] as const
}

export function getV2QuotesQuoteIdFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2QuotesQuoteIdFilesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdFilesAddMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2QuotesQuoteIdFilesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV2QuotesQuoteIdFilesUploadMutationOptions<
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

export function getV2QuotesQuoteIdFinanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>
  >,
) {
  return ['v2', '/v2/quotes/:quoteId/finance', toValue(args)] as const
}

export function getV2QuotesQuoteIdFinanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdFinanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].finance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteIdFinance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdFinanceQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdFinanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdFinanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].finance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2QuotesQuoteIdFinancePayables<
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
                  ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>,
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
  const mutationDefaults = getPostV2QuotesQuoteIdFinancePayablesMutationOptions<
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

export function usePutV2QuotesQuoteIdFinancePayablesPayableId<
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
  const mutationDefaults = getPutV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function useDeleteV2QuotesQuoteIdFinancePayablesPayableId<
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
  const mutationDefaults = getDeleteV2QuotesQuoteIdFinancePayablesPayableIdMutationOptions<
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

export function usePostV2QuotesQuoteIdFinanceReceivables<
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
  const mutationDefaults = getPostV2QuotesQuoteIdFinanceReceivablesMutationOptions<
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

export function usePutV2QuotesQuoteIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function useDeleteV2QuotesQuoteIdFinanceReceivablesReceivableId<
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
  const mutationDefaults = getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdMutationOptions<
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

export function usePutV2QuotesQuoteIdInternalNotes<
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
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdInternalNotesMutationOptions<
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

export function getV2QuotesQuoteIdJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>,
) {
  return ['v2', '/v2/quotes/:quoteId/jobs', toValue(args)] as const
}

export function getV2QuotesQuoteIdJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QuotesQuoteIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.quotes[':quoteId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QuotesQuoteIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QuotesQuoteIdJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QuotesQuoteIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QuotesQuoteIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.quotes[':quoteId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2QuotesQuoteIdQuoteExpiry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdQuoteExpiryMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2QuotesQuoteIdSourceLanguage<
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
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdSourceLanguageMutationOptions<
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

export function usePutV2QuotesQuoteIdSpecialization<
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
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdSpecializationMutationOptions<
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

export function usePutV2QuotesQuoteIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function usePutV2QuotesQuoteIdTargetLanguages<
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
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdTargetLanguagesMutationOptions<
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

export function usePutV2QuotesQuoteIdVendorInstructions<
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
                    ReturnType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>,
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
  const mutationDefaults = getPutV2QuotesQuoteIdVendorInstructionsMutationOptions<
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

export function usePutV2QuotesQuoteIdVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutV2QuotesQuoteIdVolumeMutationOptions<TError, TOnMutateResult>(
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
