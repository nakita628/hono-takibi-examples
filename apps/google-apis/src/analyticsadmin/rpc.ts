import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaAccountSummaries(
  args: InferRequestType<typeof client.v1beta.accountSummaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accountSummaries.$get(args, options))
}

export async function getV1betaAccounts(
  args: InferRequestType<typeof client.v1beta.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accounts.$get(args, options))
}

export async function postV1betaAccountsProvisionAccountTicket(
  args: InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta['accounts:provisionAccountTicket'].$post(args, options))
}

export async function getV1betaProperties(
  args: InferRequestType<typeof client.v1beta.properties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.properties.$get(args, options))
}

export async function postV1betaProperties(
  args: InferRequestType<typeof client.v1beta.properties.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.properties.$post(args, options))
}

export async function postV1betaAccountSearchChangeHistoryEvents(
  args: InferRequestType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':account:searchChangeHistoryEvents'].$post(args, options),
  )
}

export async function postV1betaEntityRunAccessReport(
  args: InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':entity:runAccessReport'].$post(args, options))
}

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function deleteV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$delete(args, options))
}

export async function patchV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$patch(args, options))
}

export async function postV1betaNameArchive(
  args: InferRequestType<(typeof client.v1beta)[':name:archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:archive'].$post(args, options))
}

export async function getV1betaParentConversionEvents(
  args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].conversionEvents.$get(args, options))
}

export async function postV1betaParentConversionEvents(
  args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].conversionEvents.$post(args, options))
}

export async function getV1betaParentCustomDimensions(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].customDimensions.$get(args, options))
}

export async function postV1betaParentCustomDimensions(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].customDimensions.$post(args, options))
}

export async function getV1betaParentCustomMetrics(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].customMetrics.$get(args, options))
}

export async function postV1betaParentCustomMetrics(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].customMetrics.$post(args, options))
}

export async function getV1betaParentDataStreams(
  args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].dataStreams.$get(args, options))
}

export async function postV1betaParentDataStreams(
  args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].dataStreams.$post(args, options))
}

export async function getV1betaParentFirebaseLinks(
  args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].firebaseLinks.$get(args, options))
}

export async function postV1betaParentFirebaseLinks(
  args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].firebaseLinks.$post(args, options))
}

export async function getV1betaParentGoogleAdsLinks(
  args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].googleAdsLinks.$get(args, options))
}

export async function postV1betaParentGoogleAdsLinks(
  args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].googleAdsLinks.$post(args, options))
}

export async function getV1betaParentMeasurementProtocolSecrets(
  args: InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent'].measurementProtocolSecrets.$get(args, options),
  )
}

export async function postV1betaParentMeasurementProtocolSecrets(
  args: InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent'].measurementProtocolSecrets.$post(args, options),
  )
}

export async function postV1betaPropertyAcknowledgeUserDataCollection(
  args: InferRequestType<
    (typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':property:acknowledgeUserDataCollection'].$post(args, options),
  )
}
