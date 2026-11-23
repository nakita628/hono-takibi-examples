import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountingCustomersInvoicesKey(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
) {
  return ['accounting', '/accounting/customers/invoices', args] as const
}

export function useGetAccountingCustomersInvoices<TError = unknown>(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
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
        ? getGetAccountingCustomersInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.customers.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoices<TError = unknown>(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
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
        ? getGetAccountingCustomersInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.customers.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesKey() {
  return ['accounting', '/accounting/customers/invoices', 'POST'] as const
}

export function usePostAccountingCustomersInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.customers.invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounting.customers.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accounting.customers.invoices.$post> },
      ) => parseResponse(client.accounting.customers.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesDocumentsKey() {
  return ['accounting', '/accounting/customers/invoices/documents', 'POST'] as const
}

export function usePostAccountingCustomersInvoicesDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.customers.invoices.documents.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounting.customers.invoices.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.accounting.customers.invoices.documents.$post> },
      ) => parseResponse(client.accounting.customers.invoices.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesIdsKey(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
) {
  return ['accounting', '/accounting/customers/invoices/ids', args] as const
}

export function useGetAccountingCustomersInvoicesIds<TError = unknown>(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
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
        ? getGetAccountingCustomersInvoicesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.customers.invoices.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesIds<TError = unknown>(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
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
        ? getGetAccountingCustomersInvoicesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.customers.invoices.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.customers.invoices.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesSendRemindersKey() {
  return ['accounting', '/accounting/customers/invoices/sendReminders', 'POST'] as const
}

export function usePostAccountingCustomersInvoicesSendReminders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.accounting.customers.invoices.sendReminders.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesSendRemindersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>
        },
      ) =>
        parseResponse(client.accounting.customers.invoices.sendReminders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId', args] as const
}

export function useGetAccountingCustomersInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
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
        ? getGetAccountingCustomersInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounting.customers.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
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
        ? getGetAccountingCustomersInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounting.customers.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountingCustomersInvoicesInvoiceIdKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId', 'DELETE'] as const
}

export function useDeleteAccountingCustomersInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountingCustomersInvoicesInvoiceIdKey()
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
            (typeof client.accounting.customers.invoices)[':invoiceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.invoices[':invoiceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesInvoiceIdDatesKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/dates', args] as const
}

export function useGetAccountingCustomersInvoicesInvoiceIdDates<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdDatesKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].dates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesInvoiceIdDates<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdDatesKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].dates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesInvoiceIdDocumentKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/document', args] as const
}

export function useGetAccountingCustomersInvoicesInvoiceIdDocument<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdDocumentKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].document.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesInvoiceIdDocument<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdDocumentKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].document.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/duplicate', 'POST'] as const
}

export function usePostAccountingCustomersInvoicesInvoiceIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesInvoiceIdDuplicateKey()
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
            (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.invoices[':invoiceId'].duplicate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaKey() {
  return [
    'accounting',
    '/accounting/customers/invoices/:invoiceId/duplicate/proForma',
    'POST',
  ] as const
}

export function usePostAccountingCustomersInvoicesInvoiceIdDuplicateProForma<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesInvoiceIdDuplicateProFormaKey()
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
            (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.invoices[':invoiceId'].duplicate.proForma.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesInvoiceIdPaymentTermsKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/paymentTerms', args] as const
}

export function useGetAccountingCustomersInvoicesInvoiceIdPaymentTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdPaymentTermsKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesInvoiceIdPaymentTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdPaymentTermsKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountingCustomersInvoicesInvoiceIdPaymentsKey(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
) {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/payments', args] as const
}

export function useGetAccountingCustomersInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdPaymentsKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCustomersInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingCustomersInvoicesInvoiceIdPaymentsKey(args)
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
                (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
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
          client.accounting.customers.invoices[':invoiceId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesInvoiceIdPaymentsKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/payments', 'POST'] as const
}

export function usePostAccountingCustomersInvoicesInvoiceIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesInvoiceIdPaymentsKey()
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
            (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.invoices[':invoiceId'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountingCustomersInvoicesInvoiceIdSendReminderKey() {
  return ['accounting', '/accounting/customers/invoices/:invoiceId/sendReminder', 'POST'] as const
}

export function usePostAccountingCustomersInvoicesInvoiceIdSendReminder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCustomersInvoicesInvoiceIdSendReminderKey()
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
            (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.invoices[':invoiceId'].sendReminder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountingCustomersPaymentsPaymentIdKey() {
  return ['accounting', '/accounting/customers/payments/:paymentId', 'DELETE'] as const
}

export function useDeleteAccountingCustomersPaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.customers.payments)[':paymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountingCustomersPaymentsPaymentIdKey()
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
            (typeof client.accounting.customers.payments)[':paymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounting.customers.payments[':paymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingProvidersInvoicesKey(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
) {
  return ['accounting', '/accounting/providers/invoices', args] as const
}

export function useGetAccountingProvidersInvoices<TError = unknown>(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
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
        ? getGetAccountingProvidersInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.providers.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingProvidersInvoices<TError = unknown>(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
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
        ? getGetAccountingProvidersInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.providers.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingProvidersInvoicesKey() {
  return ['accounting', '/accounting/providers/invoices', 'POST'] as const
}

export function usePostAccountingProvidersInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounting.providers.invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounting.providers.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingProvidersInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accounting.providers.invoices.$post> },
      ) => parseResponse(client.accounting.providers.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingProvidersInvoicesIdsKey(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
) {
  return ['accounting', '/accounting/providers/invoices/ids', args] as const
}

export function useGetAccountingProvidersInvoicesIds<TError = unknown>(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
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
        ? getGetAccountingProvidersInvoicesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.providers.invoices.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingProvidersInvoicesIds<TError = unknown>(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
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
        ? getGetAccountingProvidersInvoicesIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.accounting.providers.invoices.ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounting.providers.invoices.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountingProvidersInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId', args] as const
}

export function useGetAccountingProvidersInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
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
        ? getGetAccountingProvidersInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounting.providers.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingProvidersInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
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
        ? getGetAccountingProvidersInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounting.providers.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountingProvidersInvoicesInvoiceIdKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId', 'DELETE'] as const
}

export function useDeleteAccountingProvidersInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountingProvidersInvoicesInvoiceIdKey()
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
            (typeof client.accounting.providers.invoices)[':invoiceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounting.providers.invoices[':invoiceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingProvidersInvoicesInvoiceIdDocumentKey(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/document', args] as const
}

export function useGetAccountingProvidersInvoicesInvoiceIdDocument<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingProvidersInvoicesInvoiceIdDocumentKey(args)
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
                (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
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
          client.accounting.providers.invoices[':invoiceId'].document.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingProvidersInvoicesInvoiceIdDocument<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingProvidersInvoicesInvoiceIdDocumentKey(args)
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
                (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
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
          client.accounting.providers.invoices[':invoiceId'].document.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountingProvidersInvoicesInvoiceIdPaymentsKey(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
) {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/payments', args] as const
}

export function useGetAccountingProvidersInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingProvidersInvoicesInvoiceIdPaymentsKey(args)
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
                (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
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
          client.accounting.providers.invoices[':invoiceId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingProvidersInvoicesInvoiceIdPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountingProvidersInvoicesInvoiceIdPaymentsKey(args)
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
                (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
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
          client.accounting.providers.invoices[':invoiceId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingProvidersInvoicesInvoiceIdPaymentsKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/payments', 'POST'] as const
}

export function usePostAccountingProvidersInvoicesInvoiceIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingProvidersInvoicesInvoiceIdPaymentsKey()
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
            (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.providers.invoices[':invoiceId'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountingProvidersInvoicesInvoiceIdSendKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/send', 'POST'] as const
}

export function usePostAccountingProvidersInvoicesInvoiceIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingProvidersInvoicesInvoiceIdSendKey()
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
            (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.providers.invoices[':invoiceId'].send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountingProvidersInvoicesInvoiceIdStatusKey() {
  return ['accounting', '/accounting/providers/invoices/:invoiceId/status', 'POST'] as const
}

export function usePostAccountingProvidersInvoicesInvoiceIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingProvidersInvoicesInvoiceIdStatusKey()
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
            (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounting.providers.invoices[':invoiceId'].status.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountingProvidersPaymentsPaymentIdKey() {
  return ['accounting', '/accounting/providers/payments/:paymentId', 'DELETE'] as const
}

export function useDeleteAccountingProvidersPaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounting.providers.payments)[':paymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountingProvidersPaymentsPaymentIdKey()
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
            (typeof client.accounting.providers.payments)[':paymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounting.providers.payments[':paymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserKey(args: InferRequestType<typeof client.browser.$get>) {
  return ['browser', '/browser', args] as const
}

export function useGetBrowser<TError = unknown>(
  args: InferRequestType<typeof client.browser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.browser.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBrowser<TError = unknown>(
  args: InferRequestType<typeof client.browser.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.browser.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBrowserCsvKey(args: InferRequestType<typeof client.browser.csv.$get>) {
  return ['browser', '/browser/csv', args] as const
}

export function useGetBrowserCsv<TError = unknown>(
  args: InferRequestType<typeof client.browser.csv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowserCsvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserCsv<TError = unknown>(
  args: InferRequestType<typeof client.browser.csv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowserCsvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browser.csv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowserViewsDetailsForClassNameKey(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
) {
  return ['browser', '/browser/views/details/for/:className', args] as const
}

export function useGetBrowserViewsDetailsForClassName<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
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
        ? getGetBrowserViewsDetailsForClassNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views.details.for[':className'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsDetailsForClassName<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
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
        ? getGetBrowserViewsDetailsForClassNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.details.for)[':className']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views.details.for[':className'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowserViewsDetailsForClassNameViewIdKey(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
) {
  return ['browser', '/browser/views/details/for/:className/:viewId', args] as const
}

export function useGetBrowserViewsDetailsForClassNameViewId<TError = unknown>(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
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
        ? getGetBrowserViewsDetailsForClassNameViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.browser.views.details.for[':className'][':viewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsDetailsForClassNameViewId<TError = unknown>(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
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
        ? getGetBrowserViewsDetailsForClassNameViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views.details.for)[':className'][':viewId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.browser.views.details.for[':className'][':viewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBrowserViewsDetailsForClassNameViewIdKey() {
  return ['browser', '/browser/views/details/for/:className/:viewId', 'POST'] as const
}

export function usePostBrowserViewsDetailsForClassNameViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.browser.views.details.for)[':className'][':viewId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrowserViewsDetailsForClassNameViewIdKey()
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
            (typeof client.browser.views.details.for)[':className'][':viewId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.browser.views.details.for[':className'][':viewId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsForClassNameKey(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
) {
  return ['browser', '/browser/views/for/:className', args] as const
}

export function useGetBrowserViewsForClassName<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
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
        ? getGetBrowserViewsForClassNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views.for[':className'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsForClassName<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
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
        ? getGetBrowserViewsForClassNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views.for[':className'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBrowserViewsForClassNameKey() {
  return ['browser', '/browser/views/for/:className', 'POST'] as const
}

export function usePostBrowserViewsForClassName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views.for)[':className']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views.for)[':className']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrowserViewsForClassNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.browser.views.for)[':className']['$post']> },
      ) => parseResponse(client.browser.views.for[':className'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
) {
  return ['browser', '/browser/views/:viewId', args] as const
}

export function useGetBrowserViewsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
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
        ? getGetBrowserViewsViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
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
        ? getGetBrowserViewsViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdKey() {
  return ['browser', '/browser/views/:viewId', 'PUT'] as const
}

export function usePutBrowserViewsViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['$put']> },
      ) => parseResponse(client.browser.views[':viewId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBrowserViewsViewIdKey() {
  return ['browser', '/browser/views/:viewId', 'DELETE'] as const
}

export function useDeleteBrowserViewsViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBrowserViewsViewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['$delete']> },
      ) => parseResponse(client.browser.views[':viewId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdColumnsKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/columns', args] as const
}

export function useGetBrowserViewsViewIdColumns<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
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
        ? getGetBrowserViewsViewIdColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdColumns<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
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
        ? getGetBrowserViewsViewIdColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdColumnsKey() {
  return ['browser', '/browser/views/:viewId/columns', 'PUT'] as const
}

export function usePutBrowserViewsViewIdColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['columns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']> },
      ) => parseResponse(client.browser.views[':viewId'].columns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBrowserViewsViewIdColumnsColumnNameKey() {
  return ['browser', '/browser/views/:viewId/columns/:columnName', 'DELETE'] as const
}

export function useDeleteBrowserViewsViewIdColumnsColumnName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBrowserViewsViewIdColumnsColumnNameKey()
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
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.browser.views[':viewId'].columns[':columnName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdColumnsColumnNameSettingsKey(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
) {
  return ['browser', '/browser/views/:viewId/columns/:columnName/settings', args] as const
}

export function useGetBrowserViewsViewIdColumnsColumnNameSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBrowserViewsViewIdColumnsColumnNameSettingsKey(args)
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
                (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
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
          client.browser.views[':viewId'].columns[':columnName'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdColumnsColumnNameSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBrowserViewsViewIdColumnsColumnNameSettingsKey(args)
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
                (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
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
          client.browser.views[':viewId'].columns[':columnName'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdColumnsColumnNameSettingsKey() {
  return ['browser', '/browser/views/:viewId/columns/:columnName/settings', 'PUT'] as const
}

export function usePutBrowserViewsViewIdColumnsColumnNameSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdColumnsColumnNameSettingsKey()
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
            (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.browser.views[':viewId'].columns[':columnName'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdFilterKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/filter', args] as const
}

export function useGetBrowserViewsViewIdFilter<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
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
        ? getGetBrowserViewsViewIdFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdFilter<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
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
        ? getGetBrowserViewsViewIdFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdFilterKey() {
  return ['browser', '/browser/views/:viewId/filter', 'PUT'] as const
}

export function usePutBrowserViewsViewIdFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['filter']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']> },
      ) => parseResponse(client.browser.views[':viewId'].filter.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdFilterFilterPropertyKey() {
  return ['browser', '/browser/views/:viewId/filter/:filterProperty', 'PUT'] as const
}

export function usePutBrowserViewsViewIdFilterFilterProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdFilterFilterPropertyKey()
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
            (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
          >
        },
      ) =>
        parseResponse(
          client.browser.views[':viewId'].filter[':filterProperty'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdOrderKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/order', args] as const
}

export function useGetBrowserViewsViewIdOrder<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
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
        ? getGetBrowserViewsViewIdOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdOrder<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
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
        ? getGetBrowserViewsViewIdOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdOrderKey() {
  return ['browser', '/browser/views/:viewId/order', 'PUT'] as const
}

export function usePutBrowserViewsViewIdOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['order']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']> },
      ) => parseResponse(client.browser.views[':viewId'].order.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdPermissionsKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/permissions', args] as const
}

export function useGetBrowserViewsViewIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
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
        ? getGetBrowserViewsViewIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views[':viewId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
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
        ? getGetBrowserViewsViewIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views[':viewId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdPermissionsKey() {
  return ['browser', '/browser/views/:viewId/permissions', 'PUT'] as const
}

export function usePutBrowserViewsViewIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['permissions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>
        },
      ) => parseResponse(client.browser.views[':viewId'].permissions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdSettingsKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/settings', args] as const
}

export function useGetBrowserViewsViewIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
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
        ? getGetBrowserViewsViewIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
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
        ? getGetBrowserViewsViewIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browser.views[':viewId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdSettingsKey() {
  return ['browser', '/browser/views/:viewId/settings', 'PUT'] as const
}

export function usePutBrowserViewsViewIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']> },
      ) => parseResponse(client.browser.views[':viewId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowserViewsViewIdSettingsLocalKey(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
) {
  return ['browser', '/browser/views/:viewId/settings/local', args] as const
}

export function useGetBrowserViewsViewIdSettingsLocal<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
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
        ? getGetBrowserViewsViewIdSettingsLocalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views[':viewId'].settings.local.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowserViewsViewIdSettingsLocal<TError = unknown>(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
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
        ? getGetBrowserViewsViewIdSettingsLocalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browser.views[':viewId'].settings.local.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBrowserViewsViewIdSettingsLocalKey() {
  return ['browser', '/browser/views/:viewId/settings/local', 'PUT'] as const
}

export function usePutBrowserViewsViewIdSettingsLocal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBrowserViewsViewIdSettingsLocalKey()
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
            (typeof client.browser.views)[':viewId']['settings']['local']['$put']
          >
        },
      ) => parseResponse(client.browser.views[':viewId'].settings.local.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersKey(args: InferRequestType<typeof client.customers.$get>) {
  return ['customers', '/customers', args] as const
}

export function useGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function usePostCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.$post> }) =>
        parseResponse(client.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdsKey(args: InferRequestType<typeof client.customers.ids.$get>) {
  return ['customers', '/customers/ids', args] as const
}

export function useGetCustomersIds<TError = unknown>(
  args: InferRequestType<typeof client.customers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersIds<TError = unknown>(
  args: InferRequestType<typeof client.customers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersPersonsKey() {
  return ['customers', '/customers/persons', 'POST'] as const
}

export function usePostCustomersPersons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.customers.persons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersPersonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.persons.$post> }) =>
        parseResponse(client.customers.persons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersPersonsAccessTokenKey() {
  return ['customers', '/customers/persons/accessToken', 'POST'] as const
}

export function usePostCustomersPersonsAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.accessToken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.customers.persons.accessToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersPersonsAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.customers.persons.accessToken.$post> },
      ) => parseResponse(client.customers.persons.accessToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersPersonsIdsKey(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
) {
  return ['customers', '/customers/persons/ids', args] as const
}

export function useGetCustomersPersonsIds<TError = unknown>(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
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
        ? getGetCustomersPersonsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.persons.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersPersonsIds<TError = unknown>(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
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
        ? getGetCustomersPersonsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.persons.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.persons.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersPersonsPersonIdKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
) {
  return ['customers', '/customers/persons/:personId', args] as const
}

export function useGetCustomersPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
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
        ? getGetCustomersPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
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
        ? getGetCustomersPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersPersonsPersonIdKey() {
  return ['customers', '/customers/persons/:personId', 'PUT'] as const
}

export function usePutCustomersPersonsPersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers.persons)[':personId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersPersonsPersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers.persons)[':personId']['$put']> },
      ) => parseResponse(client.customers.persons[':personId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersPersonsPersonIdKey() {
  return ['customers', '/customers/persons/:personId', 'DELETE'] as const
}

export function useDeleteCustomersPersonsPersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers.persons)[':personId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersPersonsPersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers.persons)[':personId']['$delete']> },
      ) => parseResponse(client.customers.persons[':personId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersPersonsPersonIdContactKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
) {
  return ['customers', '/customers/persons/:personId/contact', args] as const
}

export function useGetCustomersPersonsPersonIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
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
        ? getGetCustomersPersonsPersonIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers.persons[':personId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersPersonsPersonIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
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
        ? getGetCustomersPersonsPersonIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers.persons[':personId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersPersonsPersonIdContactKey() {
  return ['customers', '/customers/persons/:personId/contact', 'PUT'] as const
}

export function usePutCustomersPersonsPersonIdContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers.persons)[':personId']['contact']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersPersonsPersonIdContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>
        },
      ) => parseResponse(client.customers.persons[':personId'].contact.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersPersonsPersonIdCustomFieldsKey(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
) {
  return ['customers', '/customers/persons/:personId/customFields', args] as const
}

export function useGetCustomersPersonsPersonIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
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
        ? getGetCustomersPersonsPersonIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers.persons[':personId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersPersonsPersonIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
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
        ? getGetCustomersPersonsPersonIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers.persons)[':personId']['customFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers.persons[':personId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersPersonsPersonIdCustomFieldsKey() {
  return ['customers', '/customers/persons/:personId/customFields', 'PUT'] as const
}

export function usePutCustomersPersonsPersonIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersPersonsPersonIdCustomFieldsKey()
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
            (typeof client.customers.persons)[':personId']['customFields']['$put']
          >
        },
      ) =>
        parseResponse(client.customers.persons[':personId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersPriceListsPriceListIdKey() {
  return ['customers', '/customers/priceLists/:priceListId', 'DELETE'] as const
}

export function useDeleteCustomersPriceListsPriceListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers.priceLists)[':priceListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersPriceListsPriceListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>
        },
      ) => parseResponse(client.customers.priceLists[':priceListId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
) {
  return ['customers', '/customers/:customerId', args] as const
}

export function useGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
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
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
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
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdKey() {
  return ['customers', '/customers/:customerId', 'PUT'] as const
}

export function usePutCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customerId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':customerId']['$put']> },
      ) => parseResponse(client.customers[':customerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersCustomerIdKey() {
  return ['customers', '/customers/:customerId', 'DELETE'] as const
}

export function useDeleteCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':customerId']['$delete']> },
      ) => parseResponse(client.customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdAddressKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
) {
  return ['customers', '/customers/:customerId/address', args] as const
}

export function useGetCustomersCustomerIdAddress<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
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
        ? getGetCustomersCustomerIdAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdAddress<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
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
        ? getGetCustomersCustomerIdAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdAddressKey() {
  return ['customers', '/customers/:customerId/address', 'PUT'] as const
}

export function usePutCustomersCustomerIdAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers)[':customerId']['address']['$put']> },
      ) => parseResponse(client.customers[':customerId'].address.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdCategoriesKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
) {
  return ['customers', '/customers/:customerId/categories', args] as const
}

export function useGetCustomersCustomerIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
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
        ? getGetCustomersCustomerIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
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
        ? getGetCustomersCustomerIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdCategoriesKey() {
  return ['customers', '/customers/:customerId/categories', 'PUT'] as const
}

export function usePutCustomersCustomerIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['categories']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>
        },
      ) => parseResponse(client.customers[':customerId'].categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdContactKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
) {
  return ['customers', '/customers/:customerId/contact', args] as const
}

export function useGetCustomersCustomerIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
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
        ? getGetCustomersCustomerIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
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
        ? getGetCustomersCustomerIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customerId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdContactKey() {
  return ['customers', '/customers/:customerId/contact', 'PUT'] as const
}

export function usePutCustomersCustomerIdContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['contact']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']> },
      ) => parseResponse(client.customers[':customerId'].contact.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdCorrespondenceAddressKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
) {
  return ['customers', '/customers/:customerId/correspondenceAddress', args] as const
}

export function useGetCustomersCustomerIdCorrespondenceAddress<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
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
        ? getGetCustomersCustomerIdCorrespondenceAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':customerId'].correspondenceAddress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdCorrespondenceAddress<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
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
        ? getGetCustomersCustomerIdCorrespondenceAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':customerId'].correspondenceAddress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdCorrespondenceAddressKey() {
  return ['customers', '/customers/:customerId/correspondenceAddress', 'PUT'] as const
}

export function usePutCustomersCustomerIdCorrespondenceAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdCorrespondenceAddressKey()
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
            (typeof client.customers)[':customerId']['correspondenceAddress']['$put']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customerId'].correspondenceAddress.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdCustomFieldsKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
) {
  return ['customers', '/customers/:customerId/customFields', args] as const
}

export function useGetCustomersCustomerIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
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
        ? getGetCustomersCustomerIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
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
        ? getGetCustomersCustomerIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdCustomFieldsKey() {
  return ['customers', '/customers/:customerId/customFields', 'PUT'] as const
}

export function usePutCustomersCustomerIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>
        },
      ) => parseResponse(client.customers[':customerId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdCustomFieldsCustomFieldKeyKey(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
) {
  return ['customers', '/customers/:customerId/customFields/:customFieldKey', args] as const
}

export function useGetCustomersCustomerIdCustomFieldsCustomFieldKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCustomersCustomerIdCustomFieldsCustomFieldKeyKey(args)
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
                (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
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
          client.customers[':customerId'].customFields[':customFieldKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdCustomFieldsCustomFieldKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCustomersCustomerIdCustomFieldsCustomFieldKeyKey(args)
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
                (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
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
          client.customers[':customerId'].customFields[':customFieldKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdCustomFieldsCustomFieldKeyKey() {
  return ['customers', '/customers/:customerId/customFields/:customFieldKey', 'PUT'] as const
}

export function usePutCustomersCustomerIdCustomFieldsCustomFieldKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdCustomFieldsCustomFieldKeyKey()
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
            (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.customers[':customerId'].customFields[':customFieldKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdIndustriesKey(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
) {
  return ['customers', '/customers/:customerId/industries', args] as const
}

export function useGetCustomersCustomerIdIndustries<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
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
        ? getGetCustomersCustomerIdIndustriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].industries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdIndustries<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
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
        ? getGetCustomersCustomerIdIndustriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customerId'].industries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersCustomerIdIndustriesKey() {
  return ['customers', '/customers/:customerId/industries', 'PUT'] as const
}

export function usePutCustomersCustomerIdIndustries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customerId']['industries']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersCustomerIdIndustriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>
        },
      ) => parseResponse(client.customers[':customerId'].industries.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDictionariesActiveKey() {
  return ['dictionaries', '/dictionaries/active'] as const
}

export function useGetDictionariesActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDictionariesActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDictionariesActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDictionariesAllKey() {
  return ['dictionaries', '/dictionaries/all'] as const
}

export function useGetDictionariesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDictionariesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDictionariesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dictionaries.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDictionariesCurrencyIsoCodeExchangeRateKey(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
) {
  return ['dictionaries', '/dictionaries/currency/:isoCode/exchangeRate', args] as const
}

export function useGetDictionariesCurrencyIsoCodeExchangeRate<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
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
        ? getGetDictionariesCurrencyIsoCodeExchangeRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dictionaries.currency[':isoCode'].exchangeRate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesCurrencyIsoCodeExchangeRate<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
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
        ? getGetDictionariesCurrencyIsoCodeExchangeRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dictionaries.currency[':isoCode'].exchangeRate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDictionariesCurrencyIsoCodeExchangeRateKey() {
  return ['dictionaries', '/dictionaries/currency/:isoCode/exchangeRate', 'POST'] as const
}

export function usePostDictionariesCurrencyIsoCodeExchangeRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDictionariesCurrencyIsoCodeExchangeRateKey()
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
            (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dictionaries.currency[':isoCode'].exchangeRate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDictionariesTypeActiveKey(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/active', args] as const
}

export function useGetDictionariesTypeActive<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
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
        ? getGetDictionariesTypeActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'].active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesTypeActive<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
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
        ? getGetDictionariesTypeActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'].active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDictionariesTypeAllKey(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/all', args] as const
}

export function useGetDictionariesTypeAll<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
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
        ? getGetDictionariesTypeAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesTypeAll<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
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
        ? getGetDictionariesTypeAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDictionariesTypeIdKey(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
) {
  return ['dictionaries', '/dictionaries/:type/:id', args] as const
}

export function useGetDictionariesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
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
        ? getGetDictionariesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDictionariesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
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
        ? getGetDictionariesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dictionaries)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dictionaries[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdKey(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>) {
  return ['jobs', '/jobs/:jobId', args] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutJobsJobIdDatesKey() {
  return ['jobs', '/jobs/:jobId/dates', 'PUT'] as const
}

export function usePutJobsJobIdDates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['dates']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdDatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']> },
      ) => parseResponse(client.jobs[':jobId'].dates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdFilesKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
) {
  return ['jobs', '/jobs/:jobId/files', args] as const
}

export function useGetJobsJobIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsJobIdFilesOutputKey() {
  return ['jobs', '/jobs/:jobId/files/output', 'POST'] as const
}

export function usePostJobsJobIdFilesOutput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['files']['output']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsJobIdFilesOutputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']> },
      ) => parseResponse(client.jobs[':jobId'].files.output.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdFilesFileIdKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
) {
  return ['jobs', '/jobs/:jobId/files/:fileId', args] as const
}

export function useGetJobsJobIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
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
        ? getGetJobsJobIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
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
        ? getGetJobsJobIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutJobsJobIdInstructionsKey() {
  return ['jobs', '/jobs/:jobId/instructions', 'PUT'] as const
}

export function usePutJobsJobIdInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['instructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']> },
      ) => parseResponse(client.jobs[':jobId'].instructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutJobsJobIdStatusKey() {
  return ['jobs', '/jobs/:jobId/status', 'PUT'] as const
}

export function usePutJobsJobIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']> },
      ) => parseResponse(client.jobs[':jobId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutJobsJobIdVendorKey() {
  return ['jobs', '/jobs/:jobId/vendor', 'PUT'] as const
}

export function usePutJobsJobIdVendor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['vendor']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdVendorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']> },
      ) => parseResponse(client.jobs[':jobId'].vendor.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicenseKey() {
  return ['license', '/license'] as const
}

export function useGetLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicenseRefreshKey() {
  return ['license', '/license/refresh', 'POST'] as const
}

export function usePostLicenseRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.refresh.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.license.refresh.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMacrosMacroIdRunKey() {
  return ['macros', '/macros/:macroId/run', 'POST'] as const
}

export function usePostMacrosMacroIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.macros)[':macroId']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.macros)[':macroId']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMacrosMacroIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.macros)[':macroId']['run']['$post']> },
      ) => parseResponse(client.macros[':macroId'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function usePostProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.projects.$post> }) =>
        parseResponse(client.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsFilesFileIdDownloadKey(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
) {
  return ['projects', '/projects/files/:fileId/download', args] as const
}

export function useGetProjectsFilesFileIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
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
        ? getGetProjectsFilesFileIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects.files[':fileId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsFilesFileIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
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
        ? getGetProjectsFilesFileIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects.files)[':fileId']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects.files[':fileId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsIdsKey(args: InferRequestType<typeof client.projects.ids.$get>) {
  return ['projects', '/projects/ids', args] as const
}

export function useGetProjectsIds<TError = unknown>(
  args: InferRequestType<typeof client.projects.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIds<TError = unknown>(
  args: InferRequestType<typeof client.projects.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  return ['projects', '/projects/:projectId', args] as const
}

export function useGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function useDeleteProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['$delete']> },
      ) => parseResponse(client.projects[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdContactsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
) {
  return ['projects', '/projects/:projectId/contacts', args] as const
}

export function useGetProjectsProjectIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
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
        ? getGetProjectsProjectIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
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
        ? getGetProjectsProjectIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdContactsKey() {
  return ['projects', '/projects/:projectId/contacts', 'PUT'] as const
}

export function usePutProjectsProjectIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['contacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']> },
      ) => parseResponse(client.projects[':projectId'].contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdCustomFieldsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
) {
  return ['projects', '/projects/:projectId/customFields', args] as const
}

export function useGetProjectsProjectIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
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
        ? getGetProjectsProjectIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
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
        ? getGetProjectsProjectIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdCustomFieldsKey() {
  return ['projects', '/projects/:projectId/customFields', 'PUT'] as const
}

export function usePutProjectsProjectIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>
        },
      ) => parseResponse(client.projects[':projectId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatesKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
) {
  return ['projects', '/projects/:projectId/dates', args] as const
}

export function useGetProjectsProjectIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
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
        ? getGetProjectsProjectIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
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
        ? getGetProjectsProjectIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdDatesKey() {
  return ['projects', '/projects/:projectId/dates', 'PUT'] as const
}

export function usePutProjectsProjectIdDates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['dates']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdDatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']> },
      ) => parseResponse(client.projects[':projectId'].dates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdFinanceKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
) {
  return ['projects', '/projects/:projectId/finance', args] as const
}

export function useGetProjectsProjectIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
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
        ? getGetProjectsProjectIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
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
        ? getGetProjectsProjectIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdFinancePayablesKey() {
  return ['projects', '/projects/:projectId/finance/payables', 'POST'] as const
}

export function usePostProjectsProjectIdFinancePayables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdFinancePayablesKey()
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
            (typeof client.projects)[':projectId']['finance']['payables']['$post']
          >
        },
      ) => parseResponse(client.projects[':projectId'].finance.payables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProjectsProjectIdFinancePayablesPayableIdKey() {
  return ['projects', '/projects/:projectId/finance/payables/:payableId', 'PUT'] as const
}

export function usePutProjectsProjectIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdFinancePayablesPayableIdKey()
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
            (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].finance.payables[':payableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdFinancePayablesPayableIdKey() {
  return ['projects', '/projects/:projectId/finance/payables/:payableId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdFinancePayablesPayableIdKey()
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
            (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].finance.payables[':payableId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdFinanceReceivablesKey() {
  return ['projects', '/projects/:projectId/finance/receivables', 'POST'] as const
}

export function usePostProjectsProjectIdFinanceReceivables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['finance']['receivables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdFinanceReceivablesKey()
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
            (typeof client.projects)[':projectId']['finance']['receivables']['$post']
          >
        },
      ) =>
        parseResponse(client.projects[':projectId'].finance.receivables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProjectsProjectIdFinanceReceivablesReceivableIdKey() {
  return ['projects', '/projects/:projectId/finance/receivables/:receivableId', 'PUT'] as const
}

export function usePutProjectsProjectIdFinanceReceivablesReceivableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].finance.receivables[':receivableId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdFinanceReceivablesReceivableIdKey() {
  return ['projects', '/projects/:projectId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdFinanceReceivablesReceivableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].finance.receivables[':receivableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdInstructionsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
) {
  return ['projects', '/projects/:projectId/instructions', args] as const
}

export function useGetProjectsProjectIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
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
        ? getGetProjectsProjectIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
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
        ? getGetProjectsProjectIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdInstructionsKey() {
  return ['projects', '/projects/:projectId/instructions', 'PUT'] as const
}

export function usePutProjectsProjectIdInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>
        },
      ) => parseResponse(client.projects[':projectId'].instructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdLanguageCombinationsKey() {
  return ['projects', '/projects/:projectId/languageCombinations', 'POST'] as const
}

export function usePostProjectsProjectIdLanguageCombinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdLanguageCombinationsKey()
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
            (typeof client.projects)[':projectId']['languageCombinations']['$post']
          >
        },
      ) =>
        parseResponse(client.projects[':projectId'].languageCombinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdTasksKey() {
  return ['projects', '/projects/:projectId/tasks', 'POST'] as const
}

export function usePostProjectsProjectIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']> },
      ) => parseResponse(client.projects[':projectId'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvidersIdsKey(args: InferRequestType<typeof client.providers.ids.$get>) {
  return ['providers', '/providers/ids', args] as const
}

export function useGetProvidersIds<TError = unknown>(
  args: InferRequestType<typeof client.providers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersIds<TError = unknown>(
  args: InferRequestType<typeof client.providers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersPersonsIdsKey(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
) {
  return ['providers', '/providers/persons/ids', args] as const
}

export function useGetProvidersPersonsIds<TError = unknown>(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
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
        ? getGetProvidersPersonsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.persons.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersPersonsIds<TError = unknown>(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
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
        ? getGetProvidersPersonsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providers.persons.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.persons.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersPersonsPersonIdKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
) {
  return ['providers', '/providers/persons/:personId', args] as const
}

export function useGetProvidersPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
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
        ? getGetProvidersPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
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
        ? getGetProvidersPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProvidersPersonsPersonIdKey() {
  return ['providers', '/providers/persons/:personId', 'DELETE'] as const
}

export function useDeleteProvidersPersonsPersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.providers.persons)[':personId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProvidersPersonsPersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.providers.persons)[':personId']['$delete']> },
      ) => parseResponse(client.providers.persons[':personId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvidersPersonsPersonIdContactKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
) {
  return ['providers', '/providers/persons/:personId/contact', args] as const
}

export function useGetProvidersPersonsPersonIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
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
        ? getGetProvidersPersonsPersonIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers.persons[':personId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersPersonsPersonIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
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
        ? getGetProvidersPersonsPersonIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.persons)[':personId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers.persons[':personId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersPersonsPersonIdCustomFieldsKey(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
) {
  return ['providers', '/providers/persons/:personId/customFields', args] as const
}

export function useGetProvidersPersonsPersonIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
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
        ? getGetProvidersPersonsPersonIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers.persons[':personId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersPersonsPersonIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
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
        ? getGetProvidersPersonsPersonIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers.persons)[':personId']['customFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers.persons[':personId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProvidersPersonsPersonIdNotificationInvitationKey() {
  return ['providers', '/providers/persons/:personId/notification/invitation', 'POST'] as const
}

export function usePostProvidersPersonsPersonIdNotificationInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvidersPersonsPersonIdNotificationInvitationKey()
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
            (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.providers.persons[':personId'].notification.invitation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProvidersPriceListsPriceListIdKey() {
  return ['providers', '/providers/priceLists/:priceListId', 'DELETE'] as const
}

export function useDeleteProvidersPriceListsPriceListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers.priceLists)[':priceListId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProvidersPriceListsPriceListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>
        },
      ) => parseResponse(client.providers.priceLists[':priceListId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvidersProviderIdKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
) {
  return ['providers', '/providers/:providerId', args] as const
}

export function useGetProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
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
        ? getGetProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
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
        ? getGetProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProvidersProviderIdKey() {
  return ['providers', '/providers/:providerId', 'DELETE'] as const
}

export function useDeleteProvidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.providers)[':providerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProvidersProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.providers)[':providerId']['$delete']> },
      ) => parseResponse(client.providers[':providerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvidersProviderIdAddressKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
) {
  return ['providers', '/providers/:providerId/address', args] as const
}

export function useGetProvidersProviderIdAddress<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
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
        ? getGetProvidersProviderIdAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderIdAddress<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
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
        ? getGetProvidersProviderIdAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderIdCompetenciesKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
) {
  return ['providers', '/providers/:providerId/competencies', args] as const
}

export function useGetProvidersProviderIdCompetencies<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
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
        ? getGetProvidersProviderIdCompetenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers[':providerId'].competencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderIdCompetencies<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
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
        ? getGetProvidersProviderIdCompetenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['competencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers[':providerId'].competencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderIdContactKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
) {
  return ['providers', '/providers/:providerId/contact', args] as const
}

export function useGetProvidersProviderIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
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
        ? getGetProvidersProviderIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
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
        ? getGetProvidersProviderIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderIdCorrespondenceAddressKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
) {
  return ['providers', '/providers/:providerId/correspondenceAddress', args] as const
}

export function useGetProvidersProviderIdCorrespondenceAddress<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
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
        ? getGetProvidersProviderIdCorrespondenceAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.providers[':providerId'].correspondenceAddress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderIdCorrespondenceAddress<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
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
        ? getGetProvidersProviderIdCorrespondenceAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.providers[':providerId'].correspondenceAddress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderIdCustomFieldsKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
) {
  return ['providers', '/providers/:providerId/customFields', args] as const
}

export function useGetProvidersProviderIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
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
        ? getGetProvidersProviderIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers[':providerId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
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
        ? getGetProvidersProviderIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providers[':providerId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProvidersProviderIdNotificationInvitationKey() {
  return ['providers', '/providers/:providerId/notification/invitation', 'POST'] as const
}

export function usePostProvidersProviderIdNotificationInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.providers)[':providerId']['notification']['invitation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvidersProviderIdNotificationInvitationKey()
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
            (typeof client.providers)[':providerId']['notification']['invitation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.providers[':providerId'].notification.invitation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesIdsKey(args: InferRequestType<typeof client.quotes.ids.$get>) {
  return ['quotes', '/quotes/ids', args] as const
}

export function useGetQuotesIds<TError = unknown>(
  args: InferRequestType<typeof client.quotes.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesIds<TError = unknown>(
  args: InferRequestType<typeof client.quotes.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesQuoteIdKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId', args] as const
}

export function useGetQuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesQuoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteQuotesQuoteIdKey() {
  return ['quotes', '/quotes/:quoteId', 'DELETE'] as const
}

export function useDeleteQuotesQuoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':quoteId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuotesQuoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quoteId']['$delete']> },
      ) => parseResponse(client.quotes[':quoteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdConfirmationSendKey() {
  return ['quotes', '/quotes/:quoteId/confirmation/send', 'POST'] as const
}

export function usePostQuotesQuoteIdConfirmationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdConfirmationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>
        },
      ) => parseResponse(client.quotes[':quoteId'].confirmation.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdCustomFieldsKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/customFields', args] as const
}

export function useGetQuotesQuoteIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
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
        ? getGetQuotesQuoteIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
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
        ? getGetQuotesQuoteIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotesQuoteIdCustomFieldsKey() {
  return ['quotes', '/quotes/:quoteId/customFields', 'PUT'] as const
}

export function usePutQuotesQuoteIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']> },
      ) => parseResponse(client.quotes[':quoteId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdDatesKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/dates', args] as const
}

export function useGetQuotesQuoteIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
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
        ? getGetQuotesQuoteIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
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
        ? getGetQuotesQuoteIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesQuoteIdFinanceKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/finance', args] as const
}

export function useGetQuotesQuoteIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
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
        ? getGetQuotesQuoteIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
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
        ? getGetQuotesQuoteIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotesQuoteIdFinancePayablesKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables', 'POST'] as const
}

export function usePostQuotesQuoteIdFinancePayables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdFinancePayablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>
        },
      ) => parseResponse(client.quotes[':quoteId'].finance.payables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQuotesQuoteIdFinancePayablesPayableIdKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables/:payableId', 'PUT'] as const
}

export function usePutQuotesQuoteIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIdFinancePayablesPayableIdKey()
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
            (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quoteId'].finance.payables[':payableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuotesQuoteIdFinancePayablesPayableIdKey() {
  return ['quotes', '/quotes/:quoteId/finance/payables/:payableId', 'DELETE'] as const
}

export function useDeleteQuotesQuoteIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuotesQuoteIdFinancePayablesPayableIdKey()
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
            (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quoteId'].finance.payables[':payableId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdFinanceReceivablesKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables', 'POST'] as const
}

export function usePostQuotesQuoteIdFinanceReceivables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdFinanceReceivablesKey()
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
            (typeof client.quotes)[':quoteId']['finance']['receivables']['$post']
          >
        },
      ) => parseResponse(client.quotes[':quoteId'].finance.receivables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQuotesQuoteIdFinanceReceivablesReceivableIdKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables/:receivableId', 'PUT'] as const
}

export function usePutQuotesQuoteIdFinanceReceivablesReceivableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quoteId'].finance.receivables[':receivableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdKey() {
  return ['quotes', '/quotes/:quoteId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function useDeleteQuotesQuoteIdFinanceReceivablesReceivableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuotesQuoteIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesQuoteIdInstructionsKey(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
) {
  return ['quotes', '/quotes/:quoteId/instructions', args] as const
}

export function useGetQuotesQuoteIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
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
        ? getGetQuotesQuoteIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesQuoteIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
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
        ? getGetQuotesQuoteIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':quoteId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotesQuoteIdInstructionsKey() {
  return ['quotes', '/quotes/:quoteId/instructions', 'PUT'] as const
}

export function usePutQuotesQuoteIdInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotesQuoteIdInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']> },
      ) => parseResponse(client.quotes[':quoteId'].instructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdLanguageCombinationsKey() {
  return ['quotes', '/quotes/:quoteId/languageCombinations', 'POST'] as const
}

export function usePostQuotesQuoteIdLanguageCombinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdLanguageCombinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>
        },
      ) => parseResponse(client.quotes[':quoteId'].languageCombinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdStartKey() {
  return ['quotes', '/quotes/:quoteId/start', 'POST'] as const
}

export function usePostQuotesQuoteIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':quoteId']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']> },
      ) => parseResponse(client.quotes[':quoteId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotesQuoteIdTasksKey() {
  return ['quotes', '/quotes/:quoteId/tasks', 'POST'] as const
}

export function usePostQuotesQuoteIdTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotes)[':quoteId']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotesQuoteIdTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']> },
      ) => parseResponse(client.quotes[':quoteId'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsExportXmlKey() {
  return ['reports', '/reports/export/xml', 'POST'] as const
}

export function usePostReportsExportXml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.export.xml.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.export.xml.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsExportXmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.export.xml.$post> }) =>
        parseResponse(client.reports.export.xml.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsImportXmlKey() {
  return ['reports', '/reports/import/xml', 'POST'] as const
}

export function usePostReportsImportXml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.import.xml.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.import.xml.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsImportXmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.import.xml.$post> }) =>
        parseResponse(client.reports.import.xml.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportsReportIdKey() {
  return ['reports', '/reports/:reportId', 'DELETE'] as const
}

export function useDeleteReportsReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':reportId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.reports)[':reportId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportsReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reports)[':reportId']['$delete']> },
      ) => parseResponse(client.reports[':reportId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsReportIdDuplicateKey() {
  return ['reports', '/reports/:reportId/duplicate', 'POST'] as const
}

export function usePostReportsReportIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['duplicate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsReportIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']> },
      ) => parseResponse(client.reports[':reportId'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutReportsReportIdPreferredKey() {
  return ['reports', '/reports/:reportId/preferred', 'PUT'] as const
}

export function usePutReportsReportIdPreferred<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['preferred']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReportsReportIdPreferredKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']> },
      ) => parseResponse(client.reports[':reportId'].preferred.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsReportIdResultCsvKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
) {
  return ['reports', '/reports/:reportId/result/csv', args] as const
}

export function useGetReportsReportIdResultCsv<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
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
        ? getGetReportsReportIdResultCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':reportId'].result.csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsReportIdResultCsv<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
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
        ? getGetReportsReportIdResultCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['result']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':reportId'].result.csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsReportIdResultPrinterFriendlyKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
) {
  return ['reports', '/reports/:reportId/result/printerFriendly', args] as const
}

export function useGetReportsReportIdResultPrinterFriendly<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
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
        ? getGetReportsReportIdResultPrinterFriendlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reports[':reportId'].result.printerFriendly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsReportIdResultPrinterFriendly<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
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
        ? getGetReportsReportIdResultPrinterFriendlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reports[':reportId'].result.printerFriendly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesActiveKey(
  args: InferRequestType<typeof client.services.active.$get>,
) {
  return ['services', '/services/active', args] as const
}

export function useGetServicesActive<TError = unknown>(
  args: InferRequestType<typeof client.services.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesActive<TError = unknown>(
  args: InferRequestType<typeof client.services.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesAllKey(args: InferRequestType<typeof client.services.all.$get>) {
  return ['services', '/services/all', args] as const
}

export function useGetServicesAll<TError = unknown>(
  args: InferRequestType<typeof client.services.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesAll<TError = unknown>(
  args: InferRequestType<typeof client.services.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionKey() {
  return ['subscription', '/subscription'] as const
}

export function useGetSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionKey() {
  return ['subscription', '/subscription', 'POST'] as const
}

export function usePostSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscription.$post> }) =>
        parseResponse(client.subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionSupportsKey() {
  return ['subscription', '/subscription/supports'] as const
}

export function useGetSubscriptionSupports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionSupportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.supports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionSupports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriptionSupportsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.supports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.supports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubscriptionSubscriptionIdKey() {
  return ['subscription', '/subscription/:subscriptionId', 'DELETE'] as const
}

export function useDeleteSubscriptionSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscription)[':subscriptionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']> },
      ) => parseResponse(client.subscription[':subscriptionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskIdKey() {
  return ['tasks', '/tasks/:taskId', 'DELETE'] as const
}

export function useDeleteTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['$delete']> },
      ) => parseResponse(client.tasks[':taskId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTasksTaskIdClientTaskPONumberKey() {
  return ['tasks', '/tasks/:taskId/clientTaskPONumber', 'PUT'] as const
}

export function usePutTasksTaskIdClientTaskPONumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdClientTaskPONumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>
        },
      ) => parseResponse(client.tasks[':taskId'].clientTaskPONumber.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdContactsKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/contacts', args] as const
}

export function useGetTasksTaskIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
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
        ? getGetTasksTaskIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
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
        ? getGetTasksTaskIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdContactsKey() {
  return ['tasks', '/tasks/:taskId/contacts', 'PUT'] as const
}

export function usePutTasksTaskIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['contacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdCustomFieldsKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/customFields', args] as const
}

export function useGetTasksTaskIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
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
        ? getGetTasksTaskIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
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
        ? getGetTasksTaskIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdCustomFieldsKey() {
  return ['tasks', '/tasks/:taskId/customFields', 'PUT'] as const
}

export function usePutTasksTaskIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdDatesKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/dates', args] as const
}

export function useGetTasksTaskIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
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
        ? getGetTasksTaskIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdDates<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
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
        ? getGetTasksTaskIdDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdDatesKey() {
  return ['tasks', '/tasks/:taskId/dates', 'PUT'] as const
}

export function usePutTasksTaskIdDates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['dates']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdDatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].dates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdFilesKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/files', args] as const
}

export function useGetTasksTaskIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
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
        ? getGetTasksTaskIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
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
        ? getGetTasksTaskIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIdFilesInputKey() {
  return ['tasks', '/tasks/:taskId/files/input', 'POST'] as const
}

export function usePostTasksTaskIdFilesInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['files']['input']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIdFilesInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']> },
      ) => parseResponse(client.tasks[':taskId'].files.input.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdInstructionsKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/instructions', args] as const
}

export function useGetTasksTaskIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
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
        ? getGetTasksTaskIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
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
        ? getGetTasksTaskIdInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].instructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdInstructionsKey() {
  return ['tasks', '/tasks/:taskId/instructions', 'PUT'] as const
}

export function usePutTasksTaskIdInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['instructions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].instructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTasksTaskIdNameKey() {
  return ['tasks', '/tasks/:taskId/name', 'PUT'] as const
}

export function usePutTasksTaskIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdProgressKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
) {
  return ['tasks', '/tasks/:taskId/progress', args] as const
}

export function useGetTasksTaskIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
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
        ? getGetTasksTaskIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
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
        ? getGetTasksTaskIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIdStartKey() {
  return ['tasks', '/tasks/:taskId/start', 'POST'] as const
}

export function usePostTasksTaskIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskId']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']> },
      ) => parseResponse(client.tasks[':taskId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey() {
  return ['users', '/users'] as const
}

export function useGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeTimeZoneKey() {
  return ['users', '/users/me/timeZone'] as const
}

export function useGetUsersMeTimeZone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeTimeZoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.timeZone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeTimeZone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeTimeZoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.timeZone.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.timeZone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdKey() {
  return ['users', '/users/:userId', 'PUT'] as const
}

export function usePutUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$put']> },
      ) => parseResponse(client.users[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdCustomFieldsKey(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
) {
  return ['users', '/users/:userId/customFields', args] as const
}

export function useGetUsersUserIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
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
        ? getGetUsersUserIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
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
        ? getGetUsersUserIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdCustomFieldsKey() {
  return ['users', '/users/:userId/customFields', 'PUT'] as const
}

export function usePutUsersUserIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['customFields']['$put']> },
      ) => parseResponse(client.users[':userId'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdCustomFieldsCustomFieldKeyKey(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
) {
  return ['users', '/users/:userId/customFields/:customFieldKey', args] as const
}

export function useGetUsersUserIdCustomFieldsCustomFieldKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdCustomFieldsCustomFieldKeyKey(args)
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
                (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
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
          client.users[':userId'].customFields[':customFieldKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdCustomFieldsCustomFieldKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdCustomFieldsCustomFieldKeyKey(args)
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
                (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
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
          client.users[':userId'].customFields[':customFieldKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdCustomFieldsCustomFieldKeyKey() {
  return ['users', '/users/:userId/customFields/:customFieldKey', 'PUT'] as const
}

export function usePutUsersUserIdCustomFieldsCustomFieldKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdCustomFieldsCustomFieldKeyKey()
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
            (typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].customFields[':customFieldKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdPasswordKey() {
  return ['users', '/users/:userId/password', 'PUT'] as const
}

export function usePutUsersUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['password']['$put']> },
      ) => parseResponse(client.users[':userId'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2JobsForExternalIdKey(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
) {
  return ['v2', '/v2/jobs/for-external-id', args] as const
}

export function useGetV2JobsForExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
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
        ? getGetV2JobsForExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs['for-external-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2JobsForExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
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
        ? getGetV2JobsForExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)['for-external-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs['for-external-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2JobsJobIdKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId', args] as const
}

export function useGetV2JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2JobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2JobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2JobsJobIdDatesKey() {
  return ['v2', '/v2/jobs/:jobId/dates', 'PUT'] as const
}

export function usePutV2JobsJobIdDates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdDatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']> },
      ) => parseResponse(client.v2.jobs[':jobId'].dates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2JobsJobIdFilesAddExternalLinkKey() {
  return ['v2', '/v2/jobs/:jobId/files/addExternalLink', 'POST'] as const
}

export function usePostV2JobsJobIdFilesAddExternalLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2JobsJobIdFilesAddExternalLinkKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']
          >
        },
      ) => parseResponse(client.v2.jobs[':jobId'].files.addExternalLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2JobsJobIdFilesDeliveredKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId/files/delivered', args] as const
}

export function useGetV2JobsJobIdFilesDelivered<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
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
        ? getGetV2JobsJobIdFilesDeliveredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs[':jobId'].files.delivered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2JobsJobIdFilesDelivered<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
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
        ? getGetV2JobsJobIdFilesDeliveredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.jobs[':jobId'].files.delivered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2JobsJobIdFilesDeliveredAddKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/add', 'PUT'] as const
}

export function usePutV2JobsJobIdFilesDeliveredAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdFilesDeliveredAddKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']
          >
        },
      ) => parseResponse(client.v2.jobs[':jobId'].files.delivered.add.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2JobsJobIdFilesDeliveredAddLinkKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/addLink', 'POST'] as const
}

export function usePostV2JobsJobIdFilesDeliveredAddLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2JobsJobIdFilesDeliveredAddLinkKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.jobs[':jobId'].files.delivered.addLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2JobsJobIdFilesDeliveredUploadKey() {
  return ['v2', '/v2/jobs/:jobId/files/delivered/upload', 'POST'] as const
}

export function usePostV2JobsJobIdFilesDeliveredUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2JobsJobIdFilesDeliveredUploadKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']
          >
        },
      ) => parseResponse(client.v2.jobs[':jobId'].files.delivered.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2JobsJobIdFilesSharedReferenceFilesKey(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedReferenceFiles', args] as const
}

export function useGetV2JobsJobIdFilesSharedReferenceFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
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
        ? getGetV2JobsJobIdFilesSharedReferenceFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2JobsJobIdFilesSharedReferenceFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
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
        ? getGetV2JobsJobIdFilesSharedReferenceFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2JobsJobIdFilesSharedReferenceFilesShareKey() {
  return ['v2', '/v2/jobs/:jobId/files/sharedReferenceFiles/share', 'PUT'] as const
}

export function usePutV2JobsJobIdFilesSharedReferenceFilesShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdFilesSharedReferenceFilesShareKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.jobs[':jobId'].files.sharedReferenceFiles.share.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2JobsJobIdFilesSharedWorkFilesKey(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
) {
  return ['v2', '/v2/jobs/:jobId/files/sharedWorkFiles', args] as const
}

export function useGetV2JobsJobIdFilesSharedWorkFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
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
        ? getGetV2JobsJobIdFilesSharedWorkFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2JobsJobIdFilesSharedWorkFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
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
        ? getGetV2JobsJobIdFilesSharedWorkFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2JobsJobIdFilesSharedWorkFilesShareKey() {
  return ['v2', '/v2/jobs/:jobId/files/sharedWorkFiles/share', 'PUT'] as const
}

export function usePutV2JobsJobIdFilesSharedWorkFilesShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdFilesSharedWorkFilesShareKey()
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
            (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.jobs[':jobId'].files.sharedWorkFiles.share.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2JobsJobIdFilesStopSharingKey() {
  return ['v2', '/v2/jobs/:jobId/files/stopSharing', 'PUT'] as const
}

export function usePutV2JobsJobIdFilesStopSharing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdFilesStopSharingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>
        },
      ) => parseResponse(client.v2.jobs[':jobId'].files.stopSharing.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2JobsJobIdInstructionsKey() {
  return ['v2', '/v2/jobs/:jobId/instructions', 'PUT'] as const
}

export function usePutV2JobsJobIdInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']> },
      ) => parseResponse(client.v2.jobs[':jobId'].instructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2JobsJobIdStatusKey() {
  return ['v2', '/v2/jobs/:jobId/status', 'PUT'] as const
}

export function usePutV2JobsJobIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']> },
      ) => parseResponse(client.v2.jobs[':jobId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2JobsJobIdVendorKey() {
  return ['v2', '/v2/jobs/:jobId/vendor', 'PUT'] as const
}

export function usePutV2JobsJobIdVendor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2JobsJobIdVendorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']> },
      ) => parseResponse(client.v2.jobs[':jobId'].vendor.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProjectsKey() {
  return ['v2', '/v2/projects', 'POST'] as const
}

export function usePostV2Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.projects.$post> }) =>
        parseResponse(client.v2.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProjectsFilesArchiveKey() {
  return ['v2', '/v2/projects/files/archive', 'POST'] as const
}

export function usePostV2ProjectsFilesArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.files.archive.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.files.archive.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsFilesArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.projects.files.archive.$post> },
      ) => parseResponse(client.v2.projects.files.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsFilesFileIdKey(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
) {
  return ['v2', '/v2/projects/files/:fileId', args] as const
}

export function useGetV2ProjectsFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
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
        ? getGetV2ProjectsFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
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
        ? getGetV2ProjectsFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects.files)[':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProjectsFilesFileIdDownloadFileNameKey(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
) {
  return ['v2', '/v2/projects/files/:fileId/download/:fileName', args] as const
}

export function useGetV2ProjectsFilesFileIdDownloadFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ProjectsFilesFileIdDownloadFileNameKey(args)
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
                (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
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
          client.v2.projects.files[':fileId'].download[':fileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsFilesFileIdDownloadFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ProjectsFilesFileIdDownloadFileNameKey(args)
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
                (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
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
          client.v2.projects.files[':fileId'].download[':fileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProjectsForExternalIdExternalProjectIdKey(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
) {
  return ['v2', '/v2/projects/for-external-id/:externalProjectId', args] as const
}

export function useGetV2ProjectsForExternalIdExternalProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ProjectsForExternalIdExternalProjectIdKey(args)
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
                (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
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
          client.v2.projects['for-external-id'][':externalProjectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsForExternalIdExternalProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ProjectsForExternalIdExternalProjectIdKey(args)
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
                (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
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
          client.v2.projects['for-external-id'][':externalProjectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId', args] as const
}

export function useGetV2ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
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
        ? getGetV2ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
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
        ? getGetV2ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdAddJobKey() {
  return ['v2', '/v2/projects/:projectId/addJob', 'POST'] as const
}

export function usePostV2ProjectsProjectIdAddJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdAddJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']> },
      ) => parseResponse(client.v2.projects[':projectId'].addJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdCatToolProjectKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/catToolProject', args] as const
}

export function useGetV2ProjectsProjectIdCatToolProject<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
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
        ? getGetV2ProjectsProjectIdCatToolProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].catToolProject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdCatToolProject<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
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
        ? getGetV2ProjectsProjectIdCatToolProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].catToolProject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdClientContactsKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/clientContacts', args] as const
}

export function useGetV2ProjectsProjectIdClientContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
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
        ? getGetV2ProjectsProjectIdClientContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].clientContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdClientContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
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
        ? getGetV2ProjectsProjectIdClientContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].clientContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdClientContactsKey() {
  return ['v2', '/v2/projects/:projectId/clientContacts', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdClientContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdClientContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].clientContacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdClientDeadlineKey() {
  return ['v2', '/v2/projects/:projectId/clientDeadline', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdClientDeadline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdClientDeadlineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].clientDeadline.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdClientNotesKey() {
  return ['v2', '/v2/projects/:projectId/clientNotes', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdClientNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdClientNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].clientNotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdClientReferenceNumberKey() {
  return ['v2', '/v2/projects/:projectId/clientReferenceNumber', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdClientReferenceNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdClientReferenceNumberKey()
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
            (typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].clientReferenceNumber.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdCustomFieldsKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/customFields', args] as const
}

export function useGetV2ProjectsProjectIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
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
        ? getGetV2ProjectsProjectIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
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
        ? getGetV2ProjectsProjectIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdCustomFieldsKeyKey() {
  return ['v2', '/v2/projects/:projectId/customFields/:key', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdCustomFieldsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdCustomFieldsKeyKey()
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
            (typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].customFields[':key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdFilesKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/files', args] as const
}

export function useGetV2ProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
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
        ? getGetV2ProjectsProjectIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
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
        ? getGetV2ProjectsProjectIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdFilesAddKey() {
  return ['v2', '/v2/projects/:projectId/files/add', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdFilesAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdFilesAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].files.add.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdFilesAddExternalLinkKey() {
  return ['v2', '/v2/projects/:projectId/files/addExternalLink', 'POST'] as const
}

export function usePostV2ProjectsProjectIdFilesAddExternalLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdFilesAddExternalLinkKey()
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
            (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].files.addExternalLink.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdFilesAddLinkKey() {
  return ['v2', '/v2/projects/:projectId/files/addLink', 'POST'] as const
}

export function usePostV2ProjectsProjectIdFilesAddLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdFilesAddLinkKey()
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
            (typeof client.v2.projects)[':projectId']['files']['addLink']['$post']
          >
        },
      ) => parseResponse(client.v2.projects[':projectId'].files.addLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdFilesDeliverableKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/files/deliverable', args] as const
}

export function useGetV2ProjectsProjectIdFilesDeliverable<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
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
        ? getGetV2ProjectsProjectIdFilesDeliverableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].files.deliverable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdFilesDeliverable<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
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
        ? getGetV2ProjectsProjectIdFilesDeliverableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectId'].files.deliverable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdFilesUploadKey() {
  return ['v2', '/v2/projects/:projectId/files/upload', 'POST'] as const
}

export function usePostV2ProjectsProjectIdFilesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdFilesUploadKey()
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
            (typeof client.v2.projects)[':projectId']['files']['upload']['$post']
          >
        },
      ) => parseResponse(client.v2.projects[':projectId'].files.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdFinanceKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/finance', args] as const
}

export function useGetV2ProjectsProjectIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
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
        ? getGetV2ProjectsProjectIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
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
        ? getGetV2ProjectsProjectIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdFinancePayablesKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables', 'POST'] as const
}

export function usePostV2ProjectsProjectIdFinancePayables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['payables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdFinancePayablesKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['payables']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.projects[':projectId'].finance.payables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdFinancePayablesPayableIdKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables/:payableId', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdFinancePayablesPayableIdKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].finance.payables[':payableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProjectsProjectIdFinancePayablesPayableIdKey() {
  return ['v2', '/v2/projects/:projectId/finance/payables/:payableId', 'DELETE'] as const
}

export function useDeleteV2ProjectsProjectIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProjectsProjectIdFinancePayablesPayableIdKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].finance.payables[':payableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdFinanceReceivablesKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables', 'POST'] as const
}

export function usePostV2ProjectsProjectIdFinanceReceivables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdFinanceReceivablesKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].finance.receivables.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables/:receivableId', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdFinanceReceivablesReceivableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].finance.receivables[':receivableId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdKey() {
  return ['v2', '/v2/projects/:projectId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function useDeleteV2ProjectsProjectIdFinanceReceivablesReceivableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProjectsProjectIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectId'].finance.receivables[':receivableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdInternalNotesKey() {
  return ['v2', '/v2/projects/:projectId/internalNotes', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdInternalNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdInternalNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].internalNotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdJobsKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/jobs', args] as const
}

export function useGetV2ProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
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
        ? getGetV2ProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
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
        ? getGetV2ProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdOrderDateKey() {
  return ['v2', '/v2/projects/:projectId/orderDate', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdOrderDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdOrderDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].orderDate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdProcessKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
) {
  return ['v2', '/v2/projects/:projectId/process', args] as const
}

export function useGetV2ProjectsProjectIdProcess<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
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
        ? getGetV2ProjectsProjectIdProcessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].process.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdProcess<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
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
        ? getGetV2ProjectsProjectIdProcessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['process']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':projectId'].process.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdSourceLanguageKey() {
  return ['v2', '/v2/projects/:projectId/sourceLanguage', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdSourceLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdSourceLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].sourceLanguage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdSpecializationKey() {
  return ['v2', '/v2/projects/:projectId/specialization', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdSpecialization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdSpecializationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>
        },
      ) => parseResponse(client.v2.projects[':projectId'].specialization.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdStatusKey() {
  return ['v2', '/v2/projects/:projectId/status', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']> },
      ) => parseResponse(client.v2.projects[':projectId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdTargetLanguagesKey() {
  return ['v2', '/v2/projects/:projectId/targetLanguages', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdTargetLanguages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdTargetLanguagesKey()
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
            (typeof client.v2.projects)[':projectId']['targetLanguages']['$put']
          >
        },
      ) => parseResponse(client.v2.projects[':projectId'].targetLanguages.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdVendorInstructionsKey() {
  return ['v2', '/v2/projects/:projectId/vendorInstructions', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdVendorInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdVendorInstructionsKey()
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
            (typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.projects[':projectId'].vendorInstructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdVolumeKey() {
  return ['v2', '/v2/projects/:projectId/volume', 'PUT'] as const
}

export function usePutV2ProjectsProjectIdVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectId']['volume']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']> },
      ) => parseResponse(client.v2.projects[':projectId'].volume.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2QuotesKey() {
  return ['v2', '/v2/quotes', 'POST'] as const
}

export function usePostV2Quotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2QuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.quotes.$post> }) =>
        parseResponse(client.v2.quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2QuotesFilesArchiveKey() {
  return ['v2', '/v2/quotes/files/archive', 'POST'] as const
}

export function usePostV2QuotesFilesArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.quotes.files.archive.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.quotes.files.archive.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2QuotesFilesArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.quotes.files.archive.$post> },
      ) => parseResponse(client.v2.quotes.files.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesFilesFileIdKey(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
) {
  return ['v2', '/v2/quotes/files/:fileId', args] as const
}

export function useGetV2QuotesFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
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
        ? getGetV2QuotesFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
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
        ? getGetV2QuotesFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes.files)[':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2QuotesFilesFileIdDownloadFileNameKey(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
) {
  return ['v2', '/v2/quotes/files/:fileId/download/:fileName', args] as const
}

export function useGetV2QuotesFilesFileIdDownloadFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2QuotesFilesFileIdDownloadFileNameKey(args)
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
                (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
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
          client.v2.quotes.files[':fileId'].download[':fileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesFilesFileIdDownloadFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2QuotesFilesFileIdDownloadFileNameKey(args)
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
                (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
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
          client.v2.quotes.files[':fileId'].download[':fileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId', args] as const
}

export function useGetV2QuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
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
        ? getGetV2QuotesQuoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
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
        ? getGetV2QuotesQuoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdBusinessDaysKey() {
  return ['v2', '/v2/quotes/:quoteId/businessDays', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdBusinessDays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdBusinessDaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].businessDays.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdClientContactsKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/clientContacts', args] as const
}

export function useGetV2QuotesQuoteIdClientContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
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
        ? getGetV2QuotesQuoteIdClientContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.quotes[':quoteId'].clientContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteIdClientContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
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
        ? getGetV2QuotesQuoteIdClientContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.quotes[':quoteId'].clientContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdClientContactsKey() {
  return ['v2', '/v2/quotes/:quoteId/clientContacts', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdClientContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdClientContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].clientContacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdClientNotesKey() {
  return ['v2', '/v2/quotes/:quoteId/clientNotes', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdClientNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdClientNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].clientNotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdClientReferenceNumberKey() {
  return ['v2', '/v2/quotes/:quoteId/clientReferenceNumber', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdClientReferenceNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdClientReferenceNumberKey()
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
            (typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.quotes[':quoteId'].clientReferenceNumber.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdCustomFieldsKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/customFields', args] as const
}

export function useGetV2QuotesQuoteIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
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
        ? getGetV2QuotesQuoteIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.quotes[':quoteId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
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
        ? getGetV2QuotesQuoteIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.quotes[':quoteId'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdCustomFieldsKeyKey() {
  return ['v2', '/v2/quotes/:quoteId/customFields/:key', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdCustomFieldsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdCustomFieldsKeyKey()
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
            (typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.quotes[':quoteId'].customFields[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdExpectedDeliveryDateKey() {
  return ['v2', '/v2/quotes/:quoteId/expectedDeliveryDate', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdExpectedDeliveryDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdExpectedDeliveryDateKey()
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
            (typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.quotes[':quoteId'].expectedDeliveryDate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdFilesKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/files', args] as const
}

export function useGetV2QuotesQuoteIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
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
        ? getGetV2QuotesQuoteIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
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
        ? getGetV2QuotesQuoteIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdFilesAddKey() {
  return ['v2', '/v2/quotes/:quoteId/files/add', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdFilesAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdFilesAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].files.add.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2QuotesQuoteIdFilesUploadKey() {
  return ['v2', '/v2/quotes/:quoteId/files/upload', 'POST'] as const
}

export function usePostV2QuotesQuoteIdFilesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2QuotesQuoteIdFilesUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].files.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdFinanceKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/finance', args] as const
}

export function useGetV2QuotesQuoteIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
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
        ? getGetV2QuotesQuoteIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteIdFinance<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
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
        ? getGetV2QuotesQuoteIdFinanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].finance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2QuotesQuoteIdFinancePayablesKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables', 'POST'] as const
}

export function usePostV2QuotesQuoteIdFinancePayables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2QuotesQuoteIdFinancePayablesKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']
          >
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].finance.payables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdFinancePayablesPayableIdKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables/:payableId', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdFinancePayablesPayableIdKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.quotes[':quoteId'].finance.payables[':payableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2QuotesQuoteIdFinancePayablesPayableIdKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/payables/:payableId', 'DELETE'] as const
}

export function useDeleteV2QuotesQuoteIdFinancePayablesPayableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2QuotesQuoteIdFinancePayablesPayableIdKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.quotes[':quoteId'].finance.payables[':payableId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2QuotesQuoteIdFinanceReceivablesKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables', 'POST'] as const
}

export function usePostV2QuotesQuoteIdFinanceReceivables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2QuotesQuoteIdFinanceReceivablesKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.quotes[':quoteId'].finance.receivables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables/:receivableId', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdFinanceReceivablesReceivableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdKey() {
  return ['v2', '/v2/quotes/:quoteId/finance/receivables/:receivableId', 'DELETE'] as const
}

export function useDeleteV2QuotesQuoteIdFinanceReceivablesReceivableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2QuotesQuoteIdFinanceReceivablesReceivableIdKey()
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
            (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdInternalNotesKey() {
  return ['v2', '/v2/quotes/:quoteId/internalNotes', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdInternalNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdInternalNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].internalNotes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2QuotesQuoteIdJobsKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
) {
  return ['v2', '/v2/quotes/:quoteId/jobs', args] as const
}

export function useGetV2QuotesQuoteIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
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
        ? getGetV2QuotesQuoteIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2QuotesQuoteIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
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
        ? getGetV2QuotesQuoteIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.quotes[':quoteId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdQuoteExpiryKey() {
  return ['v2', '/v2/quotes/:quoteId/quoteExpiry', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdQuoteExpiry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdQuoteExpiryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].quoteExpiry.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdSourceLanguageKey() {
  return ['v2', '/v2/quotes/:quoteId/sourceLanguage', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdSourceLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdSourceLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].sourceLanguage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdSpecializationKey() {
  return ['v2', '/v2/quotes/:quoteId/specialization', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdSpecialization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdSpecializationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].specialization.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdStatusKey() {
  return ['v2', '/v2/quotes/:quoteId/status', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdTargetLanguagesKey() {
  return ['v2', '/v2/quotes/:quoteId/targetLanguages', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdTargetLanguages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdTargetLanguagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].targetLanguages.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdVendorInstructionsKey() {
  return ['v2', '/v2/quotes/:quoteId/vendorInstructions', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdVendorInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdVendorInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>
        },
      ) => parseResponse(client.v2.quotes[':quoteId'].vendorInstructions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2QuotesQuoteIdVolumeKey() {
  return ['v2', '/v2/quotes/:quoteId/volume', 'PUT'] as const
}

export function usePutV2QuotesQuoteIdVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2QuotesQuoteIdVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']> },
      ) => parseResponse(client.v2.quotes[':quoteId'].volume.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
