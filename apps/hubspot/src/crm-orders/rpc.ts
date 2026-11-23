import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Orders(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.$get(args, options))
}

export async function postCrmObjects202609Orders(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.$post(args, options))
}

export async function postCrmObjects202609OrdersBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].orders.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609OrdersBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.batch.create.$post(args, options))
}

export async function postCrmObjects202609OrdersBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.batch.read.$post(args, options))
}

export async function postCrmObjects202609OrdersBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.batch.update.$post(args, options))
}

export async function postCrmObjects202609OrdersBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609OrdersGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].orders['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609OrdersMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.merge.$post(args, options))
}

export async function postCrmObjects202609OrdersSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders.search.$post(args, options))
}

export async function getCrmObjects202609OrdersOrderId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders'][':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders[':orderId'].$get(args, options))
}

export async function deleteCrmObjects202609OrdersOrderId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders'][':orderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].orders[':orderId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609OrdersOrderId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['orders'][':orderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].orders[':orderId'].$patch(args, options))
}

export async function getCrmObjects202609OrdersOrderIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['orders'][':orderId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].orders[':orderId'].associations[':toObjectType'].$get(
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
