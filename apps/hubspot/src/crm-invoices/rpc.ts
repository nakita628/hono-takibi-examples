import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Invoices(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].invoices.$get(args, options))
}

export async function postCrmObjects202609Invoices(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].invoices.$post(args, options))
}

export async function postCrmObjects202609InvoicesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609InvoicesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609InvoicesBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].invoices.batch.read.$post(args, options))
}

export async function postCrmObjects202609InvoicesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609InvoicesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609InvoicesGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609InvoicesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['invoices']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].invoices.merge.$post(args, options))
}

export async function postCrmObjects202609InvoicesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['invoices']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].invoices.search.$post(args, options))
}

export async function getCrmObjects202609InvoicesInvoiceId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['invoices'][':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices[':invoiceId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609InvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices'][':invoiceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices[':invoiceId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609InvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices'][':invoiceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices[':invoiceId'].$patch(args, options),
  )
}

export async function getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['invoices'][':invoiceId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].invoices[':invoiceId'].associations[':toObjectType'].$get(
      args,
      options,
    ),
  )
}

export async function putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
      ':toObjectType'
    ][':toObjectId'].$put(args, options),
  )
}

export async function putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$put(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$delete(args, options),
  )
}
