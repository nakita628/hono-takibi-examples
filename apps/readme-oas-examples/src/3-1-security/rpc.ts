import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.apiKey.$get(undefined, options))
}

export async function putAnythingApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.apiKey.$put(undefined, options))
}

export async function postAnythingApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.apiKey.$post(undefined, options))
}

export async function postAnythingBasic(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.basic.$post(undefined, options))
}

export async function putAnythingBearer(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.bearer.$put(undefined, options))
}

export async function postAnythingBearer(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.bearer.$post(undefined, options))
}

export async function postAnythingMutualTLS(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.mutualTLS.$post(undefined, options))
}

export async function getAnythingOauth2(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.oauth2.$get(undefined, options))
}

export async function putAnythingOauth2(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.oauth2.$put(undefined, options))
}

export async function postAnythingOauth2(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.oauth2.$post(undefined, options))
}

export async function deleteAnythingOauth2(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.oauth2.$delete(undefined, options))
}

export async function patchAnythingOauth2(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.oauth2.$patch(undefined, options))
}

export async function postAnythingOpenIdConnect(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.openIdConnect.$post(undefined, options))
}

export async function postAnythingNoAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.anything['no-auth'].$post(undefined, options))
}

export async function postStatus401(options?: ClientRequestOptions) {
  return await parseResponse(client.status['401'].$post(undefined, options))
}
