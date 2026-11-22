import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609FeedbackSubmissions(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].feedback_submissions.$get(args, options))
}

export async function postCrmObjects202609FeedbackSubmissions(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsMerge(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.merge.$post(args, options),
  )
}

export async function postCrmObjects202609FeedbackSubmissionsSearch(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions.search.$post(args, options),
  )
}

export async function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$patch(
      args,
      options,
    ),
  )
}

export async function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].associations[
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
