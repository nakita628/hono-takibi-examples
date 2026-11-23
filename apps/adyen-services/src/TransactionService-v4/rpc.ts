import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDisputes(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.$get(args, options))
}

export async function postDisputes(
  args: InferRequestType<typeof client.disputes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.$post(args, options))
}

export async function getDisputesDisputeIdAttachments(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':disputeId'].attachments.$get(args, options))
}

export async function postDisputesDisputeIdAttachments(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':disputeId'].attachments.$post(args, options))
}

export async function getDisputesDisputeIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.disputes[':disputeId'].attachments[':attachmentId'].$get(args, options),
  )
}

export async function deleteDisputesDisputeIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.disputes[':disputeId'].attachments[':attachmentId'].$delete(args, options),
  )
}

export async function getDisputesId(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':id'].$get(args, options))
}

export async function patchDisputesId(
  args: InferRequestType<(typeof client.disputes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':id'].$patch(args, options))
}
