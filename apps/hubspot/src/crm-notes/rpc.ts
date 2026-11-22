import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609Notes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.$get(args, options))
}

export async function postCrmObjects202609Notes(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.$post(args, options))
}

export async function postCrmObjects202609NotesBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['notes']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.batch.archive.$post(args, options))
}

export async function postCrmObjects202609NotesBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['notes']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.batch.create.$post(args, options))
}

export async function postCrmObjects202609NotesBatchRead(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.batch.read.$post(args, options))
}

export async function postCrmObjects202609NotesBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['notes']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.batch.update.$post(args, options))
}

export async function postCrmObjects202609NotesBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['notes']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.batch.upsert.$post(args, options))
}

export async function postCrmObjects202609NotesGdprDelete(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['gdpr-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].notes['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609NotesMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.merge.$post(args, options))
}

export async function postCrmObjects202609NotesSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes.search.$post(args, options))
}

export async function getCrmObjects202609NotesNoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes'][':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes[':noteId'].$get(args, options))
}

export async function deleteCrmObjects202609NotesNoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes'][':noteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes[':noteId'].$delete(args, options))
}

export async function patchCrmObjects202609NotesNoteId(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['notes'][':noteId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].notes[':noteId'].$patch(args, options))
}

export async function getCrmObjects202609NotesNoteIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['notes'][':noteId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].notes[':noteId'].associations[':toObjectType'].$get(
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
