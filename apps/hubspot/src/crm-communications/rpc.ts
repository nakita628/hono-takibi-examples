import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Communications(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].communications.$get(args, options))
}

export async function postCrmObjects202609Communications(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].communications.$post(args, options))
}

export async function postCrmObjects202609CommunicationsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsMerge(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.merge.$post(args, options),
  )
}

export async function postCrmObjects202609CommunicationsSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications.search.$post(args, options),
  )
}

export async function getCrmObjects202609CommunicationsCommunicationId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications[':communicationId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609CommunicationsCommunicationId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications[':communicationId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609CommunicationsCommunicationId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications[':communicationId'].$patch(args, options),
  )
}

export async function getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].communications[':communicationId'].associations[
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
