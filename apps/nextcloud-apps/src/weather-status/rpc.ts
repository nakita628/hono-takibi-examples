import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putOcsV2PhpAppsWeatherStatusApiV1Mode(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['mode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.mode.$put(args, options),
  )
}

export async function putOcsV2PhpAppsWeatherStatusApiV1UsePersonal(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['use-personal']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1['use-personal'].$put(args, options),
  )
}

export async function getOcsV2PhpAppsWeatherStatusApiV1Location(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['location']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.location.$get(args, options),
  )
}

export async function putOcsV2PhpAppsWeatherStatusApiV1Location(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['location']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.location.$put(args, options),
  )
}

export async function getOcsV2PhpAppsWeatherStatusApiV1Forecast(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['forecast']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.forecast.$get(args, options),
  )
}

export async function getOcsV2PhpAppsWeatherStatusApiV1Favorites(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['favorites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.favorites.$get(args, options),
  )
}

export async function putOcsV2PhpAppsWeatherStatusApiV1Favorites(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['weather_status']['api']['v1']['favorites']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.weather_status.api.v1.favorites.$put(args, options),
  )
}
