import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609PartnerClients(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['partner_clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].partner_clients.$get(args, options))
}

export async function postCrmObjects202609PartnerClients(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['partner_clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].partner_clients.$post(args, options))
}

export async function postCrmObjects202609PartnerClientsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsMerge(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.merge.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerClientsSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients.search.$post(args, options),
  )
}

export async function getCrmObjects202609PartnerClientsPartnerClientId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients'][':partnerClientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients[':partnerClientId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609PartnerClientsPartnerClientId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients'][':partnerClientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients[':partnerClientId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609PartnerClientsPartnerClientId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients'][':partnerClientId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients[':partnerClientId'].$patch(args, options),
  )
}

export async function getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_clients'][':partnerClientId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_clients[':partnerClientId'].associations[
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
