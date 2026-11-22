import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOauth2V3Token(
  args: InferRequestType<typeof client.oauth2.v3.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.v3.token.$post(args, options))
}

export async function getOauth2V21TokensKid(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['v2.1'].tokens.kid.$get(args, options))
}

export async function postOauth2V21Token(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['v2.1'].token.$post(args, options))
}

export async function getOauth2V21Verify(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['v2.1'].verify.$get(args, options))
}

export async function postOauth2V21Revoke(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['v2.1'].revoke.$post(args, options))
}

export async function postV2OauthAccessToken(
  args: InferRequestType<typeof client.v2.oauth.accessToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth.accessToken.$post(args, options))
}

export async function postV2OauthVerify(
  args: InferRequestType<typeof client.v2.oauth.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth.verify.$post(args, options))
}

export async function postV2OauthRevoke(
  args: InferRequestType<typeof client.v2.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth.revoke.$post(args, options))
}
