import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects2026090162(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-162'].$get(args, options))
}

export async function postCrmObjects2026090162(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-162'].$post(args, options))
}

export async function postCrmObjects2026090162BatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-162']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects2026090162BatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-162']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'].batch.create.$post(args, options),
  )
}

export async function postCrmObjects2026090162BatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-162'].batch.read.$post(args, options))
}

export async function postCrmObjects2026090162BatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-162']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'].batch.update.$post(args, options),
  )
}

export async function postCrmObjects2026090162BatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-162']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'].batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects2026090162Search(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-162'].search.$post(args, options))
}

export async function getCrmObjects2026090162ServiceId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162'][':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'][':serviceId'].$get(args, options),
  )
}

export async function deleteCrmObjects2026090162ServiceId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162'][':serviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'][':serviceId'].$delete(args, options),
  )
}

export async function patchCrmObjects2026090162ServiceId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-162'][':serviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-162'][':serviceId'].$patch(args, options),
  )
}

export async function postCrmObjects202609ServicesGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['services']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].services['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ServicesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['services']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].services.merge.$post(args, options))
}

export async function getCrmObjects202609ServicesServiceIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['services'][':serviceId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].services[':serviceId'].associations[':toObjectType'].$get(
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
