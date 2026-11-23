import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOcsV2PhpAppsDavApiV1Direct(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.dav.api.v1.direct.$post(args, options))
}

export async function getOcsV2PhpAppsDavApiV1FederatedCalendarsPending(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending.$get(args, options),
  )
}

export async function postOcsV2PhpAppsDavApiV1FederatedCalendarsPendingId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending[':id'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending[':id'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsDavApiV1EventsUpcoming(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.events.upcoming.$get(args, options),
  )
}

export async function getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNow(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].now.$get(args, options),
  )
}

export async function getOcsV2PhpAppsDavApiV1OutOfOfficeUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsDavApiV1OutOfOfficeUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsDavApiV1OutOfOfficeUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$delete(args, options),
  )
}

export async function postOcsV2PhpCalendarExport(
  args: InferRequestType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].calendar.export.$post(args, options))
}

export async function postOcsV2PhpCalendarImport(
  args: InferRequestType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].calendar.import.$post(args, options))
}

export async function postOcsV2PhpContactsImport(
  args: InferRequestType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].contacts.import.$post(args, options))
}
