import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Taxes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.$get(args, options))
}

export async function postCrmObjects202609Taxes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.$post(args, options))
}

export async function postCrmObjects202609TaxesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['taxes']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.batch.archive.$post(args, options))
}

export async function postCrmObjects202609TaxesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['taxes']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.batch.create.$post(args, options))
}

export async function postCrmObjects202609TaxesBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.batch.read.$post(args, options))
}

export async function postCrmObjects202609TaxesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['taxes']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.batch.update.$post(args, options))
}

export async function postCrmObjects202609TaxesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['taxes']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609TaxesGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].taxes['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609TaxesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.merge.$post(args, options))
}

export async function postCrmObjects202609TaxesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes.search.$post(args, options))
}

export async function getCrmObjects202609TaxesTaxId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes'][':taxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes[':taxId'].$get(args, options))
}

export async function deleteCrmObjects202609TaxesTaxId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes'][':taxId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes[':taxId'].$delete(args, options))
}

export async function patchCrmObjects202609TaxesTaxId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['taxes'][':taxId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].taxes[':taxId'].$patch(args, options))
}

export async function getCrmObjects202609TaxesTaxIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['taxes'][':taxId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].taxes[':taxId'].associations[':toObjectType'].$get(args, options),
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
