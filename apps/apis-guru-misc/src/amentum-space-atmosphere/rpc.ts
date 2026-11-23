import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getJb2008(
  args: InferRequestType<typeof client.jb2008.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jb2008.$get(args, options))
}

export async function getNrlmsise00(
  args: InferRequestType<typeof client.nrlmsise00.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nrlmsise00.$get(args, options))
}

export async function getWamIpe(
  args: InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wam-ipe'].$get(args, options))
}
