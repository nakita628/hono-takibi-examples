import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpSTokenPreview(
  args: InferRequestType<(typeof client)['index.php']['s'][':token']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].s[':token'].preview.$get(args, options))
}

export async function getIndexPhpAppsFilesSharingPublicpreviewToken(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.files_sharing.publicpreview[':token'].$get(args, options),
  )
}

export async function postIndexPhpAppsFilesSharingShareinfo(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files_sharing']['shareinfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.files_sharing.shareinfo.$post(args, options))
}

export async function getOcsV2PhpAppsFilesSharingApiV1Shares(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares.$get(args, options),
  )
}

export async function postOcsV2PhpAppsFilesSharingApiV1Shares(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares.$post(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1SharesInherited(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares.inherited.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1SharesPending(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares.pending.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1SharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsFilesSharingApiV1SharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsFilesSharingApiV1SharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmail(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['send-email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id']['send-email'].$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesSharingApiV1SharesPendingId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.shares.pending[':id'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1Deletedshares(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.deletedshares.$get(args, options),
  )
}

export async function postOcsV2PhpAppsFilesSharingApiV1DeletedsharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.deletedshares[':id'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1Sharees(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.sharees.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1ShareesRecommended(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.sharees_recommended.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1RemoteShares(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1RemoteSharesPending(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending.$get(args, options),
  )
}

export async function postOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending[':id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1RemoteSharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares[':id'].$get(args, options),
  )
}

export async function deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares[':id'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsFilesSharingApiV1Token(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_sharing.api.v1.token.$get(args, options),
  )
}
