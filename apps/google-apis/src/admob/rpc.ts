import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaAccounts(
  args: InferRequestType<typeof client.v1beta.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accounts.$get(args, options))
}

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function getV1betaParentAdSources(
  args: InferRequestType<(typeof client.v1beta)[':parent']['adSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].adSources.$get(args, options))
}

export async function getV1betaParentAdUnits(
  args: InferRequestType<(typeof client.v1beta)[':parent']['adUnits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].adUnits.$get(args, options))
}

export async function getV1betaParentApps(
  args: InferRequestType<(typeof client.v1beta)[':parent']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].apps.$get(args, options))
}

export async function postV1betaParentMediationReportGenerate(
  args: InferRequestType<(typeof client.v1beta)[':parent']['mediationReport:generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent']['mediationReport:generate'].$post(args, options),
  )
}

export async function postV1betaParentNetworkReportGenerate(
  args: InferRequestType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta[':parent']['networkReport:generate'].$post(args, options),
  )
}
