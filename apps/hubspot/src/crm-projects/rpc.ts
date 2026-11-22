import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Projects(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].projects.$get(args, options))
}

export async function postCrmObjects202609Projects(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].projects.$post(args, options))
}

export async function postCrmObjects202609ProjectsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ProjectsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ProjectsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].projects.batch.read.$post(args, options))
}

export async function postCrmObjects202609ProjectsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ProjectsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ProjectsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['projects']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].projects.merge.$post(args, options))
}

export async function postCrmObjects202609ProjectsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['projects']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].projects.search.$post(args, options))
}

export async function getCrmObjects202609ProjectsProjectId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['projects'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects[':projectId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ProjectsProjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects'][':projectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects[':projectId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ProjectsProjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects'][':projectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects[':projectId'].$patch(args, options),
  )
}

export async function getCrmObjects202609ProjectsProjectIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['projects'][':projectId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].projects[':projectId'].associations[':toObjectType'].$get(
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

export async function postCrmObjects202609ObjectTypeGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType']['gdpr-delete'].$post(args, options),
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
