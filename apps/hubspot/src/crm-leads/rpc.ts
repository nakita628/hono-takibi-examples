import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Leads(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.$get(args, options))
}

export async function postCrmObjects202609Leads(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.$post(args, options))
}

export async function postCrmObjects202609LeadsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.batch.archive.$post(args, options))
}

export async function postCrmObjects202609LeadsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.batch.create.$post(args, options))
}

export async function postCrmObjects202609LeadsBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.batch.read.$post(args, options))
}

export async function postCrmObjects202609LeadsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.batch.update.$post(args, options))
}

export async function postCrmObjects202609LeadsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609LeadsGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].leads['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609LeadsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.merge.$post(args, options))
}

export async function postCrmObjects202609LeadsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads.search.$post(args, options))
}

export async function getCrmObjects202609LeadsLeadsId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$get(args, options))
}

export async function deleteCrmObjects202609LeadsLeadsId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$delete(args, options))
}

export async function patchCrmObjects202609LeadsLeadsId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$patch(args, options))
}

export async function getCrmObjects202609LeadsLeadsIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].leads[':leadsId'].associations[':toObjectType'].$get(
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
