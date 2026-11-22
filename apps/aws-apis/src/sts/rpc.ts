import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAssumeRole(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRole'].$get(args, options))
}

export async function postActionAssumeRole(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRole'].$post(args, options))
}

export async function getActionAssumeRoleWithSAML(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRoleWithSAML'].$get(args, options))
}

export async function postActionAssumeRoleWithSAML(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRoleWithSAML'].$post(args, options))
}

export async function getActionAssumeRoleWithWebIdentity(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$get(args, options))
}

export async function postActionAssumeRoleWithWebIdentity(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$post(args, options))
}

export async function getActionDecodeAuthorizationMessage(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DecodeAuthorizationMessage'].$get(args, options))
}

export async function postActionDecodeAuthorizationMessage(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DecodeAuthorizationMessage'].$post(args, options))
}

export async function getActionGetAccessKeyInfo(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccessKeyInfo'].$get(args, options))
}

export async function postActionGetAccessKeyInfo(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccessKeyInfo'].$post(args, options))
}

export async function getActionGetCallerIdentity(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCallerIdentity'].$get(args, options))
}

export async function postActionGetCallerIdentity(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCallerIdentity'].$post(args, options))
}

export async function getActionGetFederationToken(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetFederationToken'].$get(args, options))
}

export async function postActionGetFederationToken(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetFederationToken'].$post(args, options))
}

export async function getActionGetSessionToken(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSessionToken'].$get(args, options))
}

export async function postActionGetSessionToken(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSessionToken'].$post(args, options))
}
