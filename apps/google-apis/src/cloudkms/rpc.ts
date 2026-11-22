import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1LocationGenerateRandomBytes(
  args: InferRequestType<(typeof client.v1)[':location:generateRandomBytes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location:generateRandomBytes'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NamePublicKey(
  args: InferRequestType<(typeof client.v1)[':name']['publicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].publicKey.$get(args, options))
}

export async function postV1NameAsymmetricDecrypt(
  args: InferRequestType<(typeof client.v1)[':name:asymmetricDecrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:asymmetricDecrypt'].$post(args, options))
}

export async function postV1NameAsymmetricSign(
  args: InferRequestType<(typeof client.v1)[':name:asymmetricSign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:asymmetricSign'].$post(args, options))
}

export async function postV1NameDecrypt(
  args: InferRequestType<(typeof client.v1)[':name:decrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:decrypt'].$post(args, options))
}

export async function postV1NameDestroy(
  args: InferRequestType<(typeof client.v1)[':name:destroy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:destroy'].$post(args, options))
}

export async function postV1NameEncrypt(
  args: InferRequestType<(typeof client.v1)[':name:encrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:encrypt'].$post(args, options))
}

export async function postV1NameMacSign(
  args: InferRequestType<(typeof client.v1)[':name:macSign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:macSign'].$post(args, options))
}

export async function postV1NameMacVerify(
  args: InferRequestType<(typeof client.v1)[':name:macVerify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:macVerify'].$post(args, options))
}

export async function postV1NameRestore(
  args: InferRequestType<(typeof client.v1)[':name:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:restore'].$post(args, options))
}

export async function postV1NameUpdatePrimaryVersion(
  args: InferRequestType<(typeof client.v1)[':name:updatePrimaryVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:updatePrimaryVersion'].$post(args, options))
}

export async function getV1NameVerifyConnectivity(
  args: InferRequestType<(typeof client.v1)[':name:verifyConnectivity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:verifyConnectivity'].$get(args, options))
}

export async function getV1ParentCryptoKeyVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeyVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cryptoKeyVersions.$get(args, options))
}

export async function postV1ParentCryptoKeyVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeyVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cryptoKeyVersions.$post(args, options))
}

export async function postV1ParentCryptoKeyVersionsImport(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeyVersions:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['cryptoKeyVersions:import'].$post(args, options))
}

export async function getV1ParentCryptoKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cryptoKeys.$get(args, options))
}

export async function postV1ParentCryptoKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['cryptoKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cryptoKeys.$post(args, options))
}

export async function getV1ParentEkmConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['ekmConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].ekmConnections.$get(args, options))
}

export async function postV1ParentEkmConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['ekmConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].ekmConnections.$post(args, options))
}

export async function getV1ParentImportJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['importJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].importJobs.$get(args, options))
}

export async function postV1ParentImportJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['importJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].importJobs.$post(args, options))
}

export async function getV1ParentKeyRings(
  args: InferRequestType<(typeof client.v1)[':parent']['keyRings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keyRings.$get(args, options))
}

export async function postV1ParentKeyRings(
  args: InferRequestType<(typeof client.v1)[':parent']['keyRings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keyRings.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
