import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609LineItems(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].line_items.$get(args, options))
}

export async function postCrmObjects202609LineItems(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['line_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].line_items.$post(args, options))
}

export async function postCrmObjects202609LineItemsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609LineItemsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['line_items']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].line_items.merge.$post(args, options))
}

export async function postCrmObjects202609LineItemsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['line_items']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].line_items.search.$post(args, options))
}

export async function getCrmObjects202609LineItemsLineItemId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items'][':lineItemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items[':lineItemId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609LineItemsLineItemId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items'][':lineItemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items[':lineItemId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609LineItemsLineItemId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items'][':lineItemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items[':lineItemId'].$patch(args, options),
  )
}

export async function getCrmObjects202609LineItemsLineItemIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['line_items'][':lineItemId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].line_items[':lineItemId'].associations[':toObjectType'].$get(
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
