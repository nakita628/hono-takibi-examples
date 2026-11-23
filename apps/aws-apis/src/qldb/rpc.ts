import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLedgersNameJournalKinesisStreamsStreamId(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(args, options),
  )
}

export async function deleteLedgersNameJournalKinesisStreamsStreamId(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$delete(args, options),
  )
}

export async function getLedgers(
  args: InferRequestType<typeof client.ledgers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers.$get(args, options))
}

export async function postLedgers(
  args: InferRequestType<typeof client.ledgers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers.$post(args, options))
}

export async function getLedgersName(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].$get(args, options))
}

export async function deleteLedgersName(
  args: InferRequestType<(typeof client.ledgers)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].$delete(args, options))
}

export async function patchLedgersName(
  args: InferRequestType<(typeof client.ledgers)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].$patch(args, options))
}

export async function getLedgersNameJournalS3ExportsExportId(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(args, options),
  )
}

export async function getLedgersNameJournalS3Exports(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name']['journal-s3-exports'].$get(args, options))
}

export async function postLedgersNameJournalS3Exports(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name']['journal-s3-exports'].$post(args, options))
}

export async function postLedgersNameBlock(
  args: InferRequestType<(typeof client.ledgers)[':name']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].block.$post(args, options))
}

export async function postLedgersNameDigest(
  args: InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].digest.$post(args, options))
}

export async function postLedgersNameRevision(
  args: InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name'].revision.$post(args, options))
}

export async function getLedgersNameJournalKinesisStreams(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name']['journal-kinesis-streams'].$get(args, options))
}

export async function postLedgersNameJournalKinesisStreams(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ledgers[':name']['journal-kinesis-streams'].$post(args, options),
  )
}

export async function getJournalS3Exports(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['journal-s3-exports'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function patchLedgersNamePermissionsMode(
  args: InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledgers[':name']['permissions-mode'].$patch(args, options))
}
