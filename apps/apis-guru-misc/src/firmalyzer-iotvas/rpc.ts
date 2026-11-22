import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDeviceDetect(
  args: InferRequestType<typeof client.device.detect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device.detect.$post(args, options))
}

export async function getFirmwareFirmwareHashAccounts(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash'].accounts.$get(args, options))
}

export async function getFirmwareFirmwareHashConfigIssues(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['config-issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash']['config-issues'].$get(args, options))
}

export async function getFirmwareFirmwareHashExpiredCerts(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['expired-certs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash']['expired-certs'].$get(args, options))
}

export async function getFirmwareFirmwareHashPrivateKeys(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['private-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash']['private-keys'].$get(args, options))
}

export async function getFirmwareFirmwareHashRisk(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['risk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash'].risk.$get(args, options))
}

export async function getFirmwareFirmwareHashWeakCerts(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-certs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash']['weak-certs'].$get(args, options))
}

export async function getFirmwareFirmwareHashWeakKeys(
  args: InferRequestType<(typeof client.firmware)[':firmware_hash']['weak-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firmware[':firmware_hash']['weak-keys'].$get(args, options))
}
