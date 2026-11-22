import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChangePassword(
  args: InferRequestType<typeof client.changePassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changePassword.$post(args, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.$post(undefined, options))
}

export async function postRequestPasswordReset(
  args: InferRequestType<typeof client.requestPasswordReset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestPasswordReset.$post(args, options))
}

export async function postSignin(
  args: InferRequestType<typeof client.signin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signin.$post(args, options))
}

export async function getSigninSigninId(
  args: InferRequestType<(typeof client.signin)[':signinId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signin[':signinId'].$get(args, options))
}

export async function putSigninSigninId(
  args: InferRequestType<(typeof client.signin)[':signinId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signin[':signinId'].$put(args, options))
}

export async function deleteSigninSigninId(
  args: InferRequestType<(typeof client.signin)[':signinId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signin[':signinId'].$delete(args, options))
}

export async function getSignins(
  args: InferRequestType<typeof client.signins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signins.$get(args, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$get(args, options))
}

export async function deleteUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$delete(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function postVerifyPasswordChange(
  args: InferRequestType<typeof client.verifyPasswordChange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifyPasswordChange.$post(args, options))
}
