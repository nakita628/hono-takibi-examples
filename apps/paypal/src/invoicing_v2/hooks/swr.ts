import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2InvoicingInvoicesKey(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
) {
  return ['v2', '/v2/invoicing/invoices', args] as const
}

export function useGetV2InvoicingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoicing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoicing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesKey() {
  return ['v2', '/v2/invoicing/invoices', 'POST'] as const
}

export function usePostV2InvoicingInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.invoicing.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.invoicing.invoices.$post> },
      ) => parseResponse(client.v2.invoicing.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdSendKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/send', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdSendKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.invoicing.invoices[':invoice_id'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdRemindKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/remind', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdRemind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdRemindKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.invoicing.invoices[':invoice_id'].remind.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdCancelKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/cancel', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdCancelKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.invoicing.invoices[':invoice_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdPaymentsKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/payments', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdPaymentsKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing.invoices[':invoice_id'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/payments/:transaction_id', 'DELETE'] as const
}

export function useDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing.invoices[':invoice_id'].payments[':transaction_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdRefundsKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/refunds', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdRefundsKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing.invoices[':invoice_id'].refunds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/refunds/:transaction_id', 'DELETE'] as const
}

export function useDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing.invoices[':invoice_id'].refunds[':transaction_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/generate-qr-code', 'POST'] as const
}

export function usePostV2InvoicingInvoicesInvoiceIdGenerateQrCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeKey()
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
            (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing.invoices[':invoice_id']['generate-qr-code'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingGenerateNextInvoiceNumberKey() {
  return ['v2', '/v2/invoicing/generate-next-invoice-number', 'POST'] as const
}

export function usePostV2InvoicingGenerateNextInvoiceNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingGenerateNextInvoiceNumberKey()
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
            (typeof client.v2.invoicing)['generate-next-invoice-number']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.invoicing['generate-next-invoice-number'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2InvoicingInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
) {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', args] as const
}

export function useGetV2InvoicingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.invoicing.invoices[':invoice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.invoicing.invoices[':invoice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2InvoicingInvoicesInvoiceIdKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', 'PUT'] as const
}

export function usePutV2InvoicingInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2InvoicingInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']> },
      ) => parseResponse(client.v2.invoicing.invoices[':invoice_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InvoicingInvoicesInvoiceIdKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', 'DELETE'] as const
}

export function useDeleteV2InvoicingInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InvoicingInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>
        },
      ) => parseResponse(client.v2.invoicing.invoices[':invoice_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InvoicingSearchInvoicesKey() {
  return ['v2', '/v2/invoicing/search-invoices', 'POST'] as const
}

export function usePostV2InvoicingSearchInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing)['search-invoices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingSearchInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']> },
      ) => parseResponse(client.v2.invoicing['search-invoices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InvoicingTemplatesKey(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
) {
  return ['v2', '/v2/invoicing/templates', args] as const
}

export function useGetV2InvoicingTemplates<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoicing.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingTemplates<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoicing.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InvoicingTemplatesKey() {
  return ['v2', '/v2/invoicing/templates', 'POST'] as const
}

export function usePostV2InvoicingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.invoicing.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InvoicingTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.invoicing.templates.$post> },
      ) => parseResponse(client.v2.invoicing.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InvoicingTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
) {
  return ['v2', '/v2/invoicing/templates/:template_id', args] as const
}

export function useGetV2InvoicingTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.invoicing.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicingTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.invoicing.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2InvoicingTemplatesTemplateIdKey() {
  return ['v2', '/v2/invoicing/templates/:template_id', 'PUT'] as const
}

export function usePutV2InvoicingTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2InvoicingTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>
        },
      ) => parseResponse(client.v2.invoicing.templates[':template_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InvoicingTemplatesTemplateIdKey() {
  return ['v2', '/v2/invoicing/templates/:template_id', 'DELETE'] as const
}

export function useDeleteV2InvoicingTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InvoicingTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>
        },
      ) => parseResponse(client.v2.invoicing.templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InvoicingAccountingSyncMerchantConnectionsKey() {
  return ['v2', '/v2/invoicing/accounting-sync/merchant/connections'] as const
}

export function useGetV2InvoicingAccountingSyncMerchantConnections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.invoicing)['accounting-sync']['merchant']['connections']['$get']
            >
          >
        >
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
        ? getGetV2InvoicingAccountingSyncMerchantConnectionsKey()
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
                (typeof client.v2.invoicing)['accounting-sync']['merchant']['connections']['$get']
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
          client.v2.invoicing['accounting-sync'].merchant.connections.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingAccountingSyncMerchantConnections<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.invoicing)['accounting-sync']['merchant']['connections']['$get']
            >
          >
        >
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
        ? getGetV2InvoicingAccountingSyncMerchantConnectionsKey()
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
                (typeof client.v2.invoicing)['accounting-sync']['merchant']['connections']['$get']
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
          client.v2.invoicing['accounting-sync'].merchant.connections.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2InvoicingAccountingSyncInvoicesIdConnectionsKey(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
) {
  return ['v2', '/v2/invoicing/accounting-sync/invoices/:id/connections', args] as const
}

export function useGetV2InvoicingAccountingSyncInvoicesIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
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
        ? getGetV2InvoicingAccountingSyncInvoicesIdConnectionsKey(args)
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
                (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
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
          client.v2.invoicing['accounting-sync'].invoices[':id'].connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicingAccountingSyncInvoicesIdConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
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
        ? getGetV2InvoicingAccountingSyncInvoicesIdConnectionsKey(args)
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
                (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
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
          client.v2.invoicing['accounting-sync'].invoices[':id'].connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
