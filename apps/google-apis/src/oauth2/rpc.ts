import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOauth2V2Tokeninfo(
  args: InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.v2.tokeninfo.$post(args, options))
}

export async function getOauth2V2Userinfo(
  args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.v2.userinfo.$get(args, options))
}

export async function getUserinfoV2Me(
  args: InferRequestType<typeof client.userinfo.v2.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userinfo.v2.me.$get(args, options))
}
