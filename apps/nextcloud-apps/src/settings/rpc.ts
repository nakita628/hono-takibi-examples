import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpSettingsAdminLogDownload(options?: ClientRequestOptions) {
  return await parseResponse(
    client['index.php'].settings.admin.log.download.$get(undefined, options),
  )
}

export async function postOcsV2PhpSettingsApiDeclarativeValue(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].settings.api.declarative.value.$post(args, options),
  )
}

export async function postOcsV2PhpSettingsApiDeclarativeValueSensitive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value-sensitive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].settings.api.declarative['value-sensitive'].$post(args, options),
  )
}

export async function getOcsV2PhpSettingsApiDeclarativeForms(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].settings.api.declarative.forms.$get(args, options),
  )
}
