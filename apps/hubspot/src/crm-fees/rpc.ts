import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Fees(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.$get(args, options))
}

export async function postCrmObjects202609Fees(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.$post(args, options))
}

export async function postCrmObjects202609FeesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['fees']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.batch.archive.$post(args, options))
}

export async function postCrmObjects202609FeesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['fees']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.batch.create.$post(args, options))
}

export async function postCrmObjects202609FeesBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.batch.read.$post(args, options))
}

export async function postCrmObjects202609FeesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['fees']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.batch.update.$post(args, options))
}

export async function postCrmObjects202609FeesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['fees']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609FeesGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees['gdpr-delete'].$post(args, options))
}

export async function postCrmObjects202609FeesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.merge.$post(args, options))
}

export async function postCrmObjects202609FeesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees.search.$post(args, options))
}

export async function getCrmObjects202609FeesFeeId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees'][':feeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees[':feeId'].$get(args, options))
}

export async function deleteCrmObjects202609FeesFeeId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees'][':feeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees[':feeId'].$delete(args, options))
}

export async function patchCrmObjects202609FeesFeeId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['fees'][':feeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].fees[':feeId'].$patch(args, options))
}

export async function getCrmObjects202609FeesFeeIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['fees'][':feeId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].fees[':feeId'].associations[':toObjectType'].$get(args, options),
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
