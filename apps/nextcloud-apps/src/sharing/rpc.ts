import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsSharingApiV1Recipients(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.recipients.$get(args, options),
  )
}

export async function getOcsV2PhpAppsSharingApiV1Secret(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.secret.$get(args, options))
}

export async function postOcsV2PhpAppsSharingApiV1Share(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.share.$post(args, options))
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].state.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdUserStatus(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id']['user-status'].$put(args, options),
  )
}

export async function postOcsV2PhpAppsSharingApiV1ShareIdSource(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSharingApiV1ShareIdSource(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSharingApiV1ShareIdRecipient(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSharingApiV1ShareIdRecipient(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$delete(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecret(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.secret.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdProperty(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].property.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdPermission(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermission(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.permission.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSharingApiV1ShareIdPermissionPreset(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.preset.$put(args, options),
  )
}

export async function postOcsV2PhpAppsSharingApiV1ShareId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSharingApiV1ShareId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSharingApiV1Shares(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.shares.$get(args, options))
}
