import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609PartnerServices(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['partner_services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].partner_services.$get(args, options))
}

export async function postCrmObjects202609PartnerServices(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['partner_services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].partner_services.$post(args, options))
}

export async function postCrmObjects202609PartnerServicesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesMerge(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.merge.$post(args, options),
  )
}

export async function postCrmObjects202609PartnerServicesSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services.search.$post(args, options),
  )
}

export async function getCrmObjects202609PartnerServicesPartnerServiceId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services'][':partnerServiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services[':partnerServiceId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609PartnerServicesPartnerServiceId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services'][':partnerServiceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services[':partnerServiceId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609PartnerServicesPartnerServiceId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services'][':partnerServiceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services[':partnerServiceId'].$patch(args, options),
  )
}

export async function getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['partner_services'][':partnerServiceId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].partner_services[':partnerServiceId'].associations[
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
