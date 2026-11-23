import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Contacts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contacts.$get(args, options))
}

export async function postCrmObjects202609Contacts(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contacts.$post(args, options))
}

export async function postCrmObjects202609ContactsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ContactsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ContactsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contacts.batch.read.$post(args, options))
}

export async function postCrmObjects202609ContactsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ContactsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ContactsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ContactsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contacts']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contacts.merge.$post(args, options))
}

export async function postCrmObjects202609ContactsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contacts']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].contacts.search.$post(args, options))
}

export async function getCrmObjects202609ContactsContactId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['contacts'][':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts[':contactId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ContactsContactId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts'][':contactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts[':contactId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ContactsContactId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts'][':contactId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts[':contactId'].$patch(args, options),
  )
}

export async function getCrmObjects202609ContactsContactIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['contacts'][':contactId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].contacts[':contactId'].associations[':toObjectType'].$get(
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
