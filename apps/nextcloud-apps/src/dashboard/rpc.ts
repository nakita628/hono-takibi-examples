import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsDashboardApiV1WidgetItems(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dashboard.api.v1['widget-items'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsDashboardApiV2WidgetItems(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dashboard.api.v2['widget-items'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsDashboardApiV1Widgets(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.dashboard.api.v1.widgets.$get(args, options))
}

export async function getOcsV2PhpAppsDashboardApiV3Layout(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.dashboard.api.v3.layout.$get(args, options))
}

export async function postOcsV2PhpAppsDashboardApiV3Layout(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.dashboard.api.v3.layout.$post(args, options))
}

export async function getOcsV2PhpAppsDashboardApiV3Statuses(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dashboard.api.v3.statuses.$get(args, options),
  )
}

export async function postOcsV2PhpAppsDashboardApiV3Statuses(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.dashboard.api.v3.statuses.$post(args, options),
  )
}
