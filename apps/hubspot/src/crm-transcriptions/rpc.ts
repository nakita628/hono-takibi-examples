import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCrmExtensionsCalling202609InboundCall(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09']['inbound-call'].$post(args, options),
  )
}

export async function postCrmExtensionsCalling202609Transcripts(
  args: InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'].transcripts.$post(args, options),
  )
}

export async function getCrmExtensionsCalling202609TranscriptsTranscriptId(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(args, options),
  )
}

export async function deleteCrmExtensionsCalling202609TranscriptsTranscriptId(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$delete(args, options),
  )
}
