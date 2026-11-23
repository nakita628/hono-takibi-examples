import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsAppstoreApiV1AppsCategories(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.apps.categories.$get(args, options),
  )
}

export async function getOcsV2PhpAppsAppstoreApiV1Apps(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.appstore.api.v1.apps.$get(args, options))
}

export async function postOcsV2PhpAppsAppstoreApiV1AppsEnable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.apps.enable.$post(args, options),
  )
}

export async function postOcsV2PhpAppsAppstoreApiV1AppsDisable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.apps.disable.$post(args, options),
  )
}

export async function postOcsV2PhpAppsAppstoreApiV1AppsUninstall(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.apps.uninstall.$post(args, options),
  )
}

export async function postOcsV2PhpAppsAppstoreApiV1AppsUpdate(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.apps.update.$post(args, options),
  )
}

export async function postOcsV2PhpAppsAppstoreApiV1BundlesEnable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.appstore.api.v1.bundles.enable.$post(args, options),
  )
}
