import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postParticipantCompleteAttachmentUploadXAmzBearer(
  args: InferRequestType<
    (typeof client.participant)['complete-attachment-upload#X-Amz-Bearer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.participant['complete-attachment-upload#X-Amz-Bearer'].$post(args, options),
  )
}

export async function postParticipantConnectionXAmzBearer(
  args: InferRequestType<(typeof client.participant)['connection#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['connection#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantDisconnectXAmzBearer(
  args: InferRequestType<(typeof client.participant)['disconnect#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['disconnect#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantAttachmentXAmzBearer(
  args: InferRequestType<(typeof client.participant)['attachment#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['attachment#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantTranscriptXAmzBearer(
  args: InferRequestType<(typeof client.participant)['transcript#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['transcript#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantEventXAmzBearer(
  args: InferRequestType<(typeof client.participant)['event#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['event#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantMessageXAmzBearer(
  args: InferRequestType<(typeof client.participant)['message#X-Amz-Bearer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.participant['message#X-Amz-Bearer'].$post(args, options))
}

export async function postParticipantStartAttachmentUploadXAmzBearer(
  args: InferRequestType<
    (typeof client.participant)['start-attachment-upload#X-Amz-Bearer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.participant['start-attachment-upload#X-Amz-Bearer'].$post(args, options),
  )
}
