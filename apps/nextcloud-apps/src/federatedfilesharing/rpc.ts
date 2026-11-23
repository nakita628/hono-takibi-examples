import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIndexPhpAppsFederatedfilesharingCreateFederatedShare(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.federatedfilesharing.createFederatedShare.$post(args, options),
  )
}

export async function postOcsV2PhpCloudShares(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdReshare(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].reshare.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdPermissions(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.shares[':id'].permissions.$post(args, options),
  )
}

export async function postOcsV2PhpCloudSharesIdAccept(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].accept.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdDecline(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].decline.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdUnshare(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].unshare.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdRevoke(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].revoke.$post(args, options))
}

export async function postOcsV2PhpCloudSharesIdMove(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.shares[':id'].move.$post(args, options))
}
