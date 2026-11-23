import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIssueTrackingCollections(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-tracking'].collections.$get(args, options))
}

export async function getIssueTrackingCollectionsCollectionId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].$get(args, options),
  )
}

export async function getIssueTrackingCollectionsCollectionIdTags(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tags.$get(args, options),
  )
}

export async function getIssueTrackingCollectionsCollectionIdTickets(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets.$get(args, options),
  )
}

export async function postIssueTrackingCollectionsCollectionIdTickets(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets.$post(args, options),
  )
}

export async function getIssueTrackingCollectionsCollectionIdTicketsTicketId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteIssueTrackingCollectionsCollectionIdTicketsTicketId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchIssueTrackingCollectionsCollectionIdTicketsTicketId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getIssueTrackingCollectionsCollectionIdTicketsTicketIdComments(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments.$get(
      args,
      options,
    ),
  )
}

export async function postIssueTrackingCollectionsCollectionIdTicketsTicketIdComments(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments.$post(
      args,
      options,
    ),
  )
}

export async function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
      ':id'
    ].$get(args, options),
  )
}

export async function deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
      ':id'
    ].$delete(args, options),
  )
}

export async function patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
      ':id'
    ].$patch(args, options),
  )
}

export async function getIssueTrackingCollectionsCollectionIdUsers(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].users.$get(args, options),
  )
}

export async function getIssueTrackingCollectionsCollectionIdUsersId(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['issue-tracking'].collections[':collection_id'].users[':id'].$get(args, options),
  )
}
