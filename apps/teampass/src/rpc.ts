import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthorize(
  args: InferRequestType<typeof client.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorize.$post(args, options))
}

export async function postAuthorizeToken(
  args: InferRequestType<typeof client.authorizeToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizeToken.$post(args, options))
}

export async function postAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$post(undefined, options))
}

export async function getItemGet(
  args: InferRequestType<typeof client.item.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.get.$get(args, options))
}

export async function getItemInFolders(
  args: InferRequestType<typeof client.item.inFolders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.inFolders.$get(args, options))
}

export async function getItemFindByUrl(
  args: InferRequestType<typeof client.item.findByUrl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.findByUrl.$get(args, options))
}

export async function getItemGetOtp(
  args: InferRequestType<typeof client.item.getOtp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.getOtp.$get(args, options))
}

export async function getItemChanges(
  args: InferRequestType<typeof client.item.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.changes.$get(args, options))
}

export async function getItemAllTags(options?: ClientRequestOptions) {
  return await parseResponse(client.item.allTags.$get(undefined, options))
}

export async function postItemCreate(
  args: InferRequestType<typeof client.item.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.create.$post(args, options))
}

export async function putItemUpdate(
  args: InferRequestType<typeof client.item.update.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.update.$put(args, options))
}

export async function deleteItemDelete(
  args: InferRequestType<typeof client.item.delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item.delete.$delete(args, options))
}

export async function getFolderListFolders(
  args: InferRequestType<typeof client.folder.listFolders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder.listFolders.$get(args, options))
}

export async function getFolderWritableFolders(options?: ClientRequestOptions) {
  return await parseResponse(client.folder.writableFolders.$get(undefined, options))
}

export async function postFolderCreate(
  args: InferRequestType<typeof client.folder.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder.create.$post(args, options))
}

export async function putFolderUpdate(
  args: InferRequestType<typeof client.folder.update.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder.update.$put(args, options))
}

export async function deleteFolderDelete(
  args: InferRequestType<typeof client.folder.delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder.delete.$delete(args, options))
}

export async function getUserList(
  args: InferRequestType<typeof client.user.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.list.$get(args, options))
}

export async function getMiscRefreshExtensionSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.misc.refreshExtensionSettings.$get(undefined, options))
}

export async function postMiscRefreshExtensionSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.misc.refreshExtensionSettings.$post(undefined, options))
}

export async function postWebauthnCreate(
  args: InferRequestType<typeof client.webauthn.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webauthn.create.$post(args, options))
}

export async function getWebauthnList(
  args: InferRequestType<typeof client.webauthn.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webauthn.list.$get(args, options))
}

export async function postWebauthnAssert(
  args: InferRequestType<typeof client.webauthn.assert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webauthn.assert.$post(args, options))
}

export async function deleteWebauthnDelete(
  args: InferRequestType<typeof client.webauthn.delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webauthn.delete.$delete(args, options))
}

export async function getSecureSendPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.secureSend.policy.$get(undefined, options))
}

export async function postSecureSendCreate(
  args: InferRequestType<typeof client.secureSend.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secureSend.create.$post(args, options))
}

export async function getSecureSendList(
  args: InferRequestType<typeof client.secureSend.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secureSend.list.$get(args, options))
}

export async function deleteSecureSendRevoke(
  args: InferRequestType<typeof client.secureSend.revoke.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secureSend.revoke.$delete(args, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getDevicePairingCapabilities(options?: ClientRequestOptions) {
  return await parseResponse(client.devicePairing.capabilities.$get(undefined, options))
}

export async function postDevicePairingCredentialStatus(
  args: InferRequestType<typeof client.devicePairing.credentialStatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devicePairing.credentialStatus.$post(args, options))
}

export async function postDevicePairingClaim(
  args: InferRequestType<typeof client.devicePairing.claim.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devicePairing.claim.$post(args, options))
}

export async function postDevicePairingStatus(
  args: InferRequestType<typeof client.devicePairing.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devicePairing.status.$post(args, options))
}

export async function postDevicePairingConsume(
  args: InferRequestType<typeof client.devicePairing.consume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devicePairing.consume.$post(args, options))
}
