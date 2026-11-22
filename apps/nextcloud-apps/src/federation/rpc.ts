import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsFederationApiV1SharedSecret(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.federation.api.v1['shared-secret'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsFederationApiV1RequestSharedSecret(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.federation.api.v1['request-shared-secret'].$post(args, options),
  )
}

export async function getOcsV2PhpCloudSharedSecret(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud['shared-secret'].$get(args, options))
}

export async function postOcsV2PhpCloudSharedSecret(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud['shared-secret'].$post(args, options))
}

export async function getOcsV2PhpAppsFederationTrustedServers(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.federation['trusted-servers'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsFederationTrustedServers(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.federation['trusted-servers'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsFederationTrustedServersId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.federation['trusted-servers'][':id'].$delete(args, options),
  )
}
