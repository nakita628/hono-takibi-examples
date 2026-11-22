import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAppkey(
  args: InferRequestType<typeof client.appkey.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appkey.$put(args, options))
}

export async function postAppkey(
  args: InferRequestType<typeof client.appkey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appkey.$post(args, options))
}

export async function patchAppkey(
  args: InferRequestType<typeof client.appkey.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appkey.$patch(args, options))
}

export async function putAuthenticationAppkey(
  args: InferRequestType<typeof client.authentication.appkey.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.appkey.$put(args, options))
}

export async function postAuthenticationAppkey(
  args: InferRequestType<typeof client.authentication.appkey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.appkey.$post(args, options))
}

export async function patchAuthenticationAppkey(
  args: InferRequestType<typeof client.authentication.appkey.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.appkey.$patch(args, options))
}

export async function getAuthenticationAuthkey(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.authkey.$get(args, options))
}

export async function putAuthenticationAuthkey(
  args: InferRequestType<typeof client.authentication.authkey.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.authkey.$put(args, options))
}

export async function postAuthenticationAuthkey(
  args: InferRequestType<typeof client.authentication.authkey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.authkey.$post(args, options))
}

export async function patchAuthenticationAuthkey(
  args: InferRequestType<typeof client.authentication.authkey.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.authkey.$patch(args, options))
}

export async function getAuthenticationVerifyotp(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.verifyotp.$get(args, options))
}

export async function getAuthkey(
  args: InferRequestType<typeof client.authkey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authkey.$get(args, options))
}

export async function putAuthkey(
  args: InferRequestType<typeof client.authkey.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authkey.$put(args, options))
}

export async function postAuthkey(
  args: InferRequestType<typeof client.authkey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authkey.$post(args, options))
}

export async function patchAuthkey(
  args: InferRequestType<typeof client.authkey.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authkey.$patch(args, options))
}

export async function getKkidAllowance(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.allowance.$get(args, options))
}

export async function postKkidAllowance(
  args: InferRequestType<typeof client.kkid.allowance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.allowance.$post(args, options))
}

export async function postKkidApns(
  args: InferRequestType<typeof client.kkid.apns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.apns.$post(args, options))
}

export async function getKkidChorelist(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.chorelist.$get(args, options))
}

export async function putKkidChorelist(
  args: InferRequestType<typeof client.kkid.chorelist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.chorelist.$put(args, options))
}

export async function postKkidChorelist(
  args: InferRequestType<typeof client.kkid.chorelist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.chorelist.$post(args, options))
}

export async function deleteKkidChorelist(
  args: InferRequestType<typeof client.kkid.chorelist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.chorelist.$delete(args, options))
}

export async function postKkidMasteruser(
  args: InferRequestType<typeof client.kkid.masteruser.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.masteruser.$post(args, options))
}

export async function getKkidShare(
  args: InferRequestType<typeof client.kkid.share.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.share.$get(args, options))
}

export async function getKkidUser(
  args: InferRequestType<typeof client.kkid.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.user.$get(args, options))
}

export async function getKkidUserlist(
  args: InferRequestType<typeof client.kkid.userlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.userlist.$get(args, options))
}

export async function putKkidUserlist(
  args: InferRequestType<typeof client.kkid.userlist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.userlist.$put(args, options))
}

export async function postKkidUserlist(
  args: InferRequestType<typeof client.kkid.userlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.userlist.$post(args, options))
}

export async function deleteKkidUserlist(
  args: InferRequestType<typeof client.kkid.userlist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.userlist.$delete(args, options))
}

export async function getKkidWishlist(
  args: InferRequestType<typeof client.kkid.wishlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.wishlist.$get(args, options))
}

export async function putKkidWishlist(
  args: InferRequestType<typeof client.kkid.wishlist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.wishlist.$put(args, options))
}

export async function postKkidWishlist(
  args: InferRequestType<typeof client.kkid.wishlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.wishlist.$post(args, options))
}

export async function deleteKkidWishlist(
  args: InferRequestType<typeof client.kkid.wishlist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kkid.wishlist.$delete(args, options))
}
