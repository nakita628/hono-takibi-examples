import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609CommercePayments(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['commerce_payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].commerce_payments.$get(args, options))
}

export async function postCrmObjects202609CommercePayments(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['commerce_payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].commerce_payments.$post(args, options))
}

export async function postCrmObjects202609CommercePaymentsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsMerge(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.merge.$post(args, options),
  )
}

export async function postCrmObjects202609CommercePaymentsSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments.search.$post(args, options),
  )
}

export async function getCrmObjects202609CommercePaymentsCommercePaymentId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments'][':commercePaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments[':commercePaymentId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609CommercePaymentsCommercePaymentId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments'][':commercePaymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments[':commercePaymentId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609CommercePaymentsCommercePaymentId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments'][':commercePaymentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments[':commercePaymentId'].$patch(args, options),
  )
}

export async function getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['commerce_payments'][':commercePaymentId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].commerce_payments[':commercePaymentId'].associations[
      ':toObjectType'
    ].$get(args, options),
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
