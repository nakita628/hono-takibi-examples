import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AppExchangeAppAttestAssertion(
  args: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAssertion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeAppAttestAssertion'].$post(args, options))
}

export async function postV1AppExchangeAppAttestAttestation(
  args: InferRequestType<(typeof client.v1)[':app:exchangeAppAttestAttestation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeAppAttestAttestation'].$post(args, options))
}

export async function postV1AppExchangeCustomToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangeCustomToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeCustomToken'].$post(args, options))
}

export async function postV1AppExchangeDebugToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangeDebugToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeDebugToken'].$post(args, options))
}

export async function postV1AppExchangeDeviceCheckToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangeDeviceCheckToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeDeviceCheckToken'].$post(args, options))
}

export async function postV1AppExchangePlayIntegrityToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangePlayIntegrityToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangePlayIntegrityToken'].$post(args, options))
}

export async function postV1AppExchangeRecaptchaEnterpriseToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaEnterpriseToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':app:exchangeRecaptchaEnterpriseToken'].$post(args, options),
  )
}

export async function postV1AppExchangeRecaptchaV3Token(
  args: InferRequestType<(typeof client.v1)[':app:exchangeRecaptchaV3Token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeRecaptchaV3Token'].$post(args, options))
}

export async function postV1AppExchangeSafetyNetToken(
  args: InferRequestType<(typeof client.v1)[':app:exchangeSafetyNetToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:exchangeSafetyNetToken'].$post(args, options))
}

export async function postV1AppGenerateAppAttestChallenge(
  args: InferRequestType<(typeof client.v1)[':app:generateAppAttestChallenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:generateAppAttestChallenge'].$post(args, options))
}

export async function postV1AppGeneratePlayIntegrityChallenge(
  args: InferRequestType<(typeof client.v1)[':app:generatePlayIntegrityChallenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':app:generatePlayIntegrityChallenge'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1ParentAppsDashAppAttestConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['appAttestConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['appAttestConfig:batchGet'].$get(args, options),
  )
}

export async function getV1ParentAppsDashDeviceCheckConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['deviceCheckConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['deviceCheckConfig:batchGet'].$get(args, options),
  )
}

export async function getV1ParentAppsDashPlayIntegrityConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['playIntegrityConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['playIntegrityConfig:batchGet'].$get(args, options),
  )
}

export async function getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaEnterpriseConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['recaptchaEnterpriseConfig:batchGet'].$get(args, options),
  )
}

export async function getV1ParentAppsDashRecaptchaV3ConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['recaptchaV3Config:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['recaptchaV3Config:batchGet'].$get(args, options),
  )
}

export async function getV1ParentAppsDashSafetyNetConfigBatchGet(
  args: InferRequestType<
    (typeof client.v1)[':parent']['apps']['-']['safetyNetConfig:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].apps['-']['safetyNetConfig:batchGet'].$get(args, options),
  )
}

export async function getV1ParentDebugTokens(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].debugTokens.$get(args, options))
}

export async function postV1ParentDebugTokens(
  args: InferRequestType<(typeof client.v1)[':parent']['debugTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].debugTokens.$post(args, options))
}

export async function getV1ParentServices(
  args: InferRequestType<(typeof client.v1)[':parent']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].services.$get(args, options))
}

export async function postV1ParentServicesBatchUpdate(
  args: InferRequestType<(typeof client.v1)[':parent']['services:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['services:batchUpdate'].$post(args, options))
}
