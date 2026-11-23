import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Emails(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.$get(args, options))
}

export async function postCrmObjects202609Emails(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.$post(args, options))
}

export async function postCrmObjects202609EmailsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].emails.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609EmailsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.batch.create.$post(args, options))
}

export async function postCrmObjects202609EmailsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.batch.read.$post(args, options))
}

export async function postCrmObjects202609EmailsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.batch.update.$post(args, options))
}

export async function postCrmObjects202609EmailsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609EmailsGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].emails['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609EmailsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.merge.$post(args, options))
}

export async function postCrmObjects202609EmailsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails.search.$post(args, options))
}

export async function getCrmObjects202609EmailsEmailId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails'][':emailId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails[':emailId'].$get(args, options))
}

export async function deleteCrmObjects202609EmailsEmailId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails'][':emailId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].emails[':emailId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609EmailsEmailId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['emails'][':emailId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].emails[':emailId'].$patch(args, options))
}

export async function getCrmObjects202609EmailsEmailIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['emails'][':emailId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].emails[':emailId'].associations[':toObjectType'].$get(
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
