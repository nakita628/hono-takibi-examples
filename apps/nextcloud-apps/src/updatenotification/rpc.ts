import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersion(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].applist[':newVersion'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].changelog[':appId'].$get(
      args,
      options,
    ),
  )
}
