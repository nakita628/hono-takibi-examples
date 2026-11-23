import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2InvoicingInvoices(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices.$get(args, options))
}

export async function postV2InvoicingInvoices(
  args: InferRequestType<typeof client.v2.invoicing.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices.$post(args, options))
}

export async function postV2InvoicingInvoicesInvoiceIdSend(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices[':invoice_id'].send.$post(args, options))
}

export async function postV2InvoicingInvoicesInvoiceIdRemind(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['remind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].remind.$post(args, options),
  )
}

export async function postV2InvoicingInvoicesInvoiceIdCancel(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].cancel.$post(args, options),
  )
}

export async function postV2InvoicingInvoicesInvoiceIdPayments(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].payments.$post(args, options),
  )
}

export async function deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionId(
  args: InferRequestType<
    (typeof client.v2.invoicing.invoices)[':invoice_id']['payments'][':transaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].payments[':transaction_id'].$delete(args, options),
  )
}

export async function postV2InvoicingInvoicesInvoiceIdRefunds(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].refunds.$post(args, options),
  )
}

export async function deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionId(
  args: InferRequestType<
    (typeof client.v2.invoicing.invoices)[':invoice_id']['refunds'][':transaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id'].refunds[':transaction_id'].$delete(args, options),
  )
}

export async function postV2InvoicingInvoicesInvoiceIdGenerateQrCode(
  args: InferRequestType<
    (typeof client.v2.invoicing.invoices)[':invoice_id']['generate-qr-code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing.invoices[':invoice_id']['generate-qr-code'].$post(args, options),
  )
}

export async function postV2InvoicingGenerateNextInvoiceNumber(
  args: InferRequestType<(typeof client.v2.invoicing)['generate-next-invoice-number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing['generate-next-invoice-number'].$post(args, options),
  )
}

export async function getV2InvoicingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices[':invoice_id'].$get(args, options))
}

export async function putV2InvoicingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices[':invoice_id'].$put(args, options))
}

export async function deleteV2InvoicingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoicing.invoices)[':invoice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.invoices[':invoice_id'].$delete(args, options))
}

export async function postV2InvoicingSearchInvoices(
  args: InferRequestType<(typeof client.v2.invoicing)['search-invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing['search-invoices'].$post(args, options))
}

export async function getV2InvoicingTemplates(
  args: InferRequestType<typeof client.v2.invoicing.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.templates.$get(args, options))
}

export async function postV2InvoicingTemplates(
  args: InferRequestType<typeof client.v2.invoicing.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.templates.$post(args, options))
}

export async function getV2InvoicingTemplatesTemplateId(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.templates[':template_id'].$get(args, options))
}

export async function putV2InvoicingTemplatesTemplateId(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.templates[':template_id'].$put(args, options))
}

export async function deleteV2InvoicingTemplatesTemplateId(
  args: InferRequestType<(typeof client.v2.invoicing.templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoicing.templates[':template_id'].$delete(args, options))
}

export async function getV2InvoicingAccountingSyncMerchantConnections(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing['accounting-sync'].merchant.connections.$get(undefined, options),
  )
}

export async function getV2InvoicingAccountingSyncInvoicesIdConnections(
  args: InferRequestType<
    (typeof client.v2.invoicing)['accounting-sync']['invoices'][':id']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.invoicing['accounting-sync'].invoices[':id'].connections.$get(args, options),
  )
}
