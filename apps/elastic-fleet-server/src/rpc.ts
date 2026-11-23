import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiStatus(
  args: InferRequestType<typeof client.api.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.status.$get(args, options))
}

export async function postApiFleetAgentsEnroll(
  args: InferRequestType<typeof client.api.fleet.agents.enroll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.agents.enroll.$post(args, options))
}

export async function postApiFleetAgentsIdCheckin(
  args: InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.agents[':id'].checkin.$post(args, options))
}

export async function postApiFleetAgentsIdAcks(
  args: InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.agents[':id'].acks.$post(args, options))
}

export async function getApiFleetArtifactsIdSha2(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.artifacts[':id'][':sha2'].$get(args, options))
}

export async function postApiFleetUploads(
  args: InferRequestType<typeof client.api.fleet.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.uploads.$post(args, options))
}

export async function putApiFleetUploadsIdChunkNum(
  args: InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.uploads[':id'][':chunkNum'].$put(args, options))
}

export async function postApiFleetUploadsId(
  args: InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.uploads[':id'].$post(args, options))
}

export async function getApiFleetFileId(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.file[':id'].$get(args, options))
}

export async function getApiAgentsUpgradesMajorMinorPatchPgpPublicKey(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.agents.upgrades[':major.{minor}.{patch}']['pgp-public-key'].$get(args, options),
  )
}

export async function postApiFleetAgentsIdAuditUnenroll(
  args: InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fleet.agents[':id'].audit.unenroll.$post(args, options))
}
