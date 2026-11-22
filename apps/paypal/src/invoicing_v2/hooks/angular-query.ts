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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2InvoicingInvoicesQueryKey(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
) {
  return ['v2', '/v2/invoicing/invoices', args] as const
}

export function getV2InvoicingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicingInvoicesQueryKey>
  >({
    queryKey: getV2InvoicingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2InvoicingInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.invoicing.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicingInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2InvoicingInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2InvoicingInvoicesMutationKey() {
  return ['v2', '/v2/invoicing/invoices', 'POST'] as const
}

export function getPostV2InvoicingInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.invoicing.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.invoicing.invoices.$post>) {
      return parseResponse(client.v2.invoicing.invoices.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.invoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.invoicing.invoices.$post>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2InvoicingInvoicesInvoiceIdSendMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/send', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].send.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdSend<
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
                ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdSendMutationOptions<
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

export function getPostV2InvoicingInvoicesInvoiceIdRemindMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/remind', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdRemindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdRemindMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']
      >,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].remind.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdRemind<
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
                    (typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdRemindMutationOptions<
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

export function getPostV2InvoicingInvoicesInvoiceIdCancelMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/cancel', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].cancel.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdCancel<
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
                    (typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdCancelMutationOptions<
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

export function getPostV2InvoicingInvoicesInvoiceIdPaymentsMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/payments', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.invoicing.invoices[':invoice_id'].payments.$post(args, options),
      )
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdPayments<
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
                  (typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdPaymentsMutationOptions<
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

export function getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/payments/:transaction_id', 'DELETE'] as const
}

export function getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.invoicing.invoices[':invoice_id'].payments[':transaction_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionId<
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
                    (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
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
      getDeleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdMutationOptions<
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

export function getPostV2InvoicingInvoicesInvoiceIdRefundsMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/refunds', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']
      >,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].refunds.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdRefunds<
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
                ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdRefundsMutationOptions<
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

export function getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/refunds/:transaction_id', 'DELETE'] as const
}

export function getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.invoicing.invoices[':invoice_id'].refunds[':transaction_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionId<
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
                    (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
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
      getDeleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdMutationOptions<
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

export function getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id/generate-qr-code', 'POST'] as const
}

export function getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.invoicing.invoices[':invoice_id']['generate-qr-code'].$post(args, options),
      )
    },
  })
}

export function injectPostV2InvoicingInvoicesInvoiceIdGenerateQrCode<
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
                  (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
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
    const mutationDefaults = getPostV2InvoicingInvoicesInvoiceIdGenerateQrCodeMutationOptions<
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

export function getPostV2InvoicingGenerateNextInvoiceNumberMutationKey() {
  return ['v2', '/v2/invoicing/generate-next-invoice-number', 'POST'] as const
}

export function getPostV2InvoicingGenerateNextInvoiceNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingGenerateNextInvoiceNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>,
    ) {
      return parseResponse(client.v2.invoicing['generate-next-invoice-number'].$post(args, options))
    },
  })
}

export function injectPostV2InvoicingGenerateNextInvoiceNumber<
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
                ReturnType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingGenerateNextInvoiceNumberMutationOptions<
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

export function getV2InvoicingInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
) {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', args] as const
}

export function getV2InvoicingInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicingInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getV2InvoicingInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing.invoices[':invoice_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InvoicingInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicingInvoicesInvoiceIdQueryKey>
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
      ...getV2InvoicingInvoicesInvoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2InvoicingInvoicesInvoiceIdMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', 'PUT'] as const
}

export function getPutV2InvoicingInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2InvoicingInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].$put(args, options))
    },
  })
}

export function injectPutV2InvoicingInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>,
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
    const mutationDefaults = getPutV2InvoicingInvoicesInvoiceIdMutationOptions<
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

export function getDeleteV2InvoicingInvoicesInvoiceIdMutationKey() {
  return ['v2', '/v2/invoicing/invoices/:invoice_id', 'DELETE'] as const
}

export function getDeleteV2InvoicingInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InvoicingInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>,
    ) {
      return parseResponse(client.v2.invoicing.invoices[':invoice_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2InvoicingInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2InvoicingInvoicesInvoiceIdMutationOptions<
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

export function getPostV2InvoicingSearchInvoicesMutationKey() {
  return ['v2', '/v2/invoicing/search-invoices', 'POST'] as const
}

export function getPostV2InvoicingSearchInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing)['search-invoices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingSearchInvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']>,
    ) {
      return parseResponse(client.v2.invoicing['search-invoices'].$post(args, options))
    },
  })
}

export function injectPostV2InvoicingSearchInvoices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoicing)['search-invoices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']>,
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
    const mutationDefaults = getPostV2InvoicingSearchInvoicesMutationOptions<
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

export function getV2InvoicingTemplatesQueryKey(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
) {
  return ['v2', '/v2/invoicing/templates', args] as const
}

export function getV2InvoicingTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicingTemplatesQueryKey>
  >({
    queryKey: getV2InvoicingTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InvoicingTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.invoicing.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicingTemplatesQueryKey>
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
      ...getV2InvoicingTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2InvoicingTemplatesMutationKey() {
  return ['v2', '/v2/invoicing/templates', 'POST'] as const
}

export function getPostV2InvoicingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.invoicing.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InvoicingTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.invoicing.templates.$post>) {
      return parseResponse(client.v2.invoicing.templates.$post(args, options))
    },
  })
}

export function injectPostV2InvoicingTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoicing.templates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.invoicing.templates.$post>,
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
    const mutationDefaults = getPostV2InvoicingTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2InvoicingTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
) {
  return ['v2', '/v2/invoicing/templates/:template_id', args] as const
}

export function getV2InvoicingTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicingTemplatesTemplateIdQueryKey>
  >({
    queryKey: getV2InvoicingTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing.templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InvoicingTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicingTemplatesTemplateIdQueryKey>
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
      ...getV2InvoicingTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2InvoicingTemplatesTemplateIdMutationKey() {
  return ['v2', '/v2/invoicing/templates/:template_id', 'PUT'] as const
}

export function getPutV2InvoicingTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2InvoicingTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>,
    ) {
      return parseResponse(client.v2.invoicing.templates[':template_id'].$put(args, options))
    },
  })
}

export function injectPutV2InvoicingTemplatesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>,
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
    const mutationDefaults = getPutV2InvoicingTemplatesTemplateIdMutationOptions<
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

export function getDeleteV2InvoicingTemplatesTemplateIdMutationKey() {
  return ['v2', '/v2/invoicing/templates/:template_id', 'DELETE'] as const
}

export function getDeleteV2InvoicingTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InvoicingTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>,
    ) {
      return parseResponse(client.v2.invoicing.templates[':template_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2InvoicingTemplatesTemplateId<
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
                  ReturnType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2InvoicingTemplatesTemplateIdMutationOptions<
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

export function getV2InvoicingAccountingSyncMerchantConnectionsQueryKey() {
  return ['v2', '/v2/invoicing/accounting-sync/merchant/connections'] as const
}

export function getV2InvoicingAccountingSyncMerchantConnectionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2InvoicingAccountingSyncMerchantConnectionsQueryKey>
  >({
    queryKey: getV2InvoicingAccountingSyncMerchantConnectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing['accounting-sync'].merchant.connections.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InvoicingAccountingSyncMerchantConnections<
  TData = Awaited<
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
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2InvoicingAccountingSyncMerchantConnectionsQueryKey>
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
      ...getV2InvoicingAccountingSyncMerchantConnectionsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
) {
  return ['v2', '/v2/invoicing/accounting-sync/invoices/:id/connections', args] as const
}

export function getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryKey>
  >({
    queryKey: getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoicing['accounting-sync'].invoices[':id'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InvoicingAccountingSyncInvoicesIdConnections<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryKey>
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
      ...getV2InvoicingAccountingSyncInvoicesIdConnectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
