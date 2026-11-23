import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActivities(
  args: InferRequestType<typeof client.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities.$get(args, options))
}

export async function getActivitiesActivityId(
  args: InferRequestType<(typeof client.activities)[':activityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities[':activityId'].$get(args, options))
}

export async function getActivitiesActivityIdComments(
  args: InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities[':activityId'].comments.$get(args, options))
}

export async function getActivitiesActivityIdPeopleCollection(
  args: InferRequestType<
    (typeof client.activities)[':activityId']['people'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.activities[':activityId'].people[':collection'].$get(args, options),
  )
}

export async function getCommentsCommentId(
  args: InferRequestType<(typeof client.comments)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':commentId'].$get(args, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function getPeopleUserId(
  args: InferRequestType<(typeof client.people)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':userId'].$get(args, options))
}

export async function getPeopleUserIdActivitiesCollection(
  args: InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':userId'].activities[':collection'].$get(args, options))
}

export async function getPeopleUserIdPeopleCollection(
  args: InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':userId'].people[':collection'].$get(args, options))
}
