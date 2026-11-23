import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Products(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].products.$get(args, options))
}

export async function postCrmObjects202609Products(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].products.$post(args, options))
}

export async function postCrmObjects202609ProductsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ProductsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ProductsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].products.batch.read.$post(args, options))
}

export async function postCrmObjects202609ProductsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ProductsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ProductsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ProductsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['products']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].products.merge.$post(args, options))
}

export async function postCrmObjects202609ProductsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['products']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].products.search.$post(args, options))
}

export async function getCrmObjects202609ProductsProductId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['products'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products[':productId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ProductsProductId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products[':productId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ProductsProductId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products'][':productId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products[':productId'].$patch(args, options),
  )
}

export async function getCrmObjects202609ProductsProductIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['products'][':productId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].products[':productId'].associations[':toObjectType'].$get(
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
