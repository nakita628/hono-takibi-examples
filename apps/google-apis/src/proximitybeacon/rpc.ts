import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1BeaconinfoGetforobserved(
  args: InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['beaconinfo:getforobserved'].$post(args, options))
}

export async function getV1beta1Beacons(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.beacons.$get(args, options))
}

export async function postV1beta1BeaconsRegister(
  args: InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['beacons:register'].$post(args, options))
}

export async function getV1beta1Eidparams(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.eidparams.$get(args, options))
}

export async function getV1beta1Namespaces(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.namespaces.$get(args, options))
}

export async function deleteV1beta1AttachmentName(
  args: InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':attachmentName'].$delete(args, options))
}

export async function getV1beta1BeaconName(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].$get(args, options))
}

export async function putV1beta1BeaconName(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].$put(args, options))
}

export async function deleteV1beta1BeaconName(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].$delete(args, options))
}

export async function getV1beta1BeaconNameAttachments(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].attachments.$get(args, options))
}

export async function postV1beta1BeaconNameAttachments(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].attachments.$post(args, options))
}

export async function postV1beta1BeaconNameAttachmentsBatchDelete(
  args: InferRequestType<
    (typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':beaconName']['attachments:batchDelete'].$post(args, options),
  )
}

export async function getV1beta1BeaconNameDiagnostics(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName'].diagnostics.$get(args, options))
}

export async function postV1beta1BeaconNameActivate(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName:activate'].$post(args, options))
}

export async function postV1beta1BeaconNameDeactivate(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName:deactivate'].$post(args, options))
}

export async function postV1beta1BeaconNameDecommission(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':beaconName:decommission'].$post(args, options))
}

export async function putV1beta1NamespaceName(
  args: InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':namespaceName'].$put(args, options))
}
