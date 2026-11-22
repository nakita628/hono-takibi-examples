import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects2026090410(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-410'].$get(args, options))
}

export async function postCrmObjects2026090410(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-410'].$post(args, options))
}

export async function postCrmObjects2026090410BatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-410']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects2026090410BatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-410']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'].batch.create.$post(args, options),
  )
}

export async function postCrmObjects2026090410BatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-410'].batch.read.$post(args, options))
}

export async function postCrmObjects2026090410BatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-410']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'].batch.update.$post(args, options),
  )
}

export async function postCrmObjects2026090410BatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['0-410']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'].batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects2026090410Search(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09']['0-410'].search.$post(args, options))
}

export async function getCrmObjects2026090410CourseId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410'][':courseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'][':courseId'].$get(args, options),
  )
}

export async function deleteCrmObjects2026090410CourseId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410'][':courseId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'][':courseId'].$delete(args, options),
  )
}

export async function patchCrmObjects2026090410CourseId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-410'][':courseId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09']['0-410'][':courseId'].$patch(args, options),
  )
}

export async function postCrmObjects202609CoursesGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['courses']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].courses['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609CoursesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['courses']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].courses.merge.$post(args, options))
}

export async function getCrmObjects202609CoursesCourseIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['courses'][':courseId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].courses[':courseId'].associations[':toObjectType'].$get(
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
