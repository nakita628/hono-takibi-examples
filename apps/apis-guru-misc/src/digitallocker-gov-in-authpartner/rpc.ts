import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccount1Pushuri(
  args: InferRequestType<(typeof client.account)['1']['pushuri']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['1'].pushuri.$post(args, options))
}

export async function postAccount2Verify(
  args: InferRequestType<(typeof client.account)['2']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['2'].verify.$post(args, options))
}

export async function getOauth21Authorize(
  args: InferRequestType<(typeof client.oauth2)['1']['authorize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].authorize.$get(args, options))
}

export async function postOauth21Code(
  args: InferRequestType<(typeof client.oauth2)['1']['code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].code.$post(args, options))
}

export async function postOauth21FileUpload(
  args: InferRequestType<(typeof client.oauth2)['1']['file']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].file.upload.$post(args, options))
}

export async function getOauth21FileUri(
  args: InferRequestType<(typeof client.oauth2)['1']['file'][':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].file[':uri'].$get(args, options))
}

export async function getOauth21FilesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['1'].files.index.$get(undefined, options))
}

export async function getOauth21FilesIssued(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['1'].files.issued.$get(undefined, options))
}

export async function getOauth21FilesId(
  args: InferRequestType<(typeof client.oauth2)['1']['files'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].files[':id'].$get(args, options))
}

export async function postOauth21PullDoctype(
  args: InferRequestType<(typeof client.oauth2)['1']['pull']['doctype']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].pull.doctype.$post(args, options))
}

export async function postOauth21PullIssuers(
  args: InferRequestType<(typeof client.oauth2)['1']['pull']['issuers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].pull.issuers.$post(args, options))
}

export async function postOauth21PullParameters(
  args: InferRequestType<(typeof client.oauth2)['1']['pull']['parameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].pull.parameters.$post(args, options))
}

export async function postOauth21PullPulldocument(
  args: InferRequestType<(typeof client.oauth2)['1']['pull']['pulldocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].pull.pulldocument.$post(args, options))
}

export async function postOauth21Revoke(
  args: InferRequestType<(typeof client.oauth2)['1']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].revoke.$post(args, options))
}

export async function postOauth21Token(
  args: InferRequestType<(typeof client.oauth2)['1']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].token.$post(args, options))
}

export async function getOauth21User(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['1'].user.$get(undefined, options))
}

export async function getOauth21XmlUri(
  args: InferRequestType<(typeof client.oauth2)['1']['xml'][':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['1'].xml[':uri'].$get(args, options))
}

export async function getOauth22FilesIssued(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['2'].files.issued.$get(undefined, options))
}

export async function getOauth22XmlEaadhaar(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['2'].xml.eaadhaar.$get(undefined, options))
}

export async function postSignup1Demoauthverify(
  args: InferRequestType<(typeof client.signup)['1']['demoauthverify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signup['1'].demoauthverify.$post(args, options))
}

export async function postSignup2Demoauth(
  args: InferRequestType<(typeof client.signup)['2']['demoauth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signup['2'].demoauth.$post(args, options))
}

export async function postStatistics1Counts(
  args: InferRequestType<(typeof client.statistics)['1']['counts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics['1'].counts.$post(args, options))
}
