import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Carts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.$get(args, options))
}

export async function postCrmObjects202609Carts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.$post(args, options))
}

export async function postCrmObjects202609CartsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['carts']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.batch.archive.$post(args, options))
}

export async function postCrmObjects202609CartsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['carts']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.batch.create.$post(args, options))
}

export async function postCrmObjects202609CartsBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.batch.read.$post(args, options))
}

export async function postCrmObjects202609CartsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['carts']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.batch.update.$post(args, options))
}

export async function postCrmObjects202609CartsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['carts']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609CartsGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].carts['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CartsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.merge.$post(args, options))
}

export async function postCrmObjects202609CartsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts.search.$post(args, options))
}

export async function getCrmObjects202609CartsCartId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts'][':cartId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts[':cartId'].$get(args, options))
}

export async function deleteCrmObjects202609CartsCartId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts'][':cartId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts[':cartId'].$delete(args, options))
}

export async function patchCrmObjects202609CartsCartId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['carts'][':cartId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].carts[':cartId'].$patch(args, options))
}

export async function getCrmObjects202609CartsCartIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['carts'][':cartId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].carts[':cartId'].associations[':toObjectType'].$get(
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
