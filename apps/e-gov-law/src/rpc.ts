import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLaws(
  args: InferRequestType<typeof client.laws.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.laws.$get(args, options))
}

export async function getLawRevisionsLawIdOrNum(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.law_revisions[':law_id_or_num'].$get(args, options))
}

export async function getLawDataLawIdOrNumOrRevisionId(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.law_data[':law_id_or_num_or_revision_id'].$get(args, options))
}

export async function getAttachmentLawRevisionId(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachment[':law_revision_id'].$get(args, options))
}

export async function getKeyword(
  args: InferRequestType<typeof client.keyword.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keyword.$get(args, options))
}

export async function getLawFileFileTypeLawIdOrNumOrRevisionId(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(args, options),
  )
}
