import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjects202609GoalTargets(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['goal_targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].goal_targets.$get(args, options))
}

export async function postCrmObjects202609GoalTargets(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['goal_targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].goal_targets.$post(args, options))
}

export async function postCrmObjects202609GoalTargetsBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets.batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets.batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets.batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets.batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets.batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609GoalTargetsMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['goal_targets']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].goal_targets.merge.$post(args, options))
}

export async function postCrmObjects202609GoalTargetsSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['goal_targets']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'].goal_targets.search.$post(args, options))
}

export async function getCrmObjects202609GoalTargetsGoalTargetId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets'][':goalTargetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets[':goalTargetId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609GoalTargetsGoalTargetId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets'][':goalTargetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets[':goalTargetId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609GoalTargetsGoalTargetId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets'][':goalTargetId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets[':goalTargetId'].$patch(args, options),
  )
}

export async function getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['goal_targets'][':goalTargetId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'].goal_targets[':goalTargetId'].associations[':toObjectType'].$get(
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
