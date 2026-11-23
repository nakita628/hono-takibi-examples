import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAtms(
  args: InferRequestType<typeof client.atms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.atms.$get(args, options))
}

export async function headAtms(
  args: InferRequestType<typeof client.atms.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.atms.$head(args, options))
}

export async function getBranches(
  args: InferRequestType<typeof client.branches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.branches.$get(args, options))
}

export async function headBranches(
  args: InferRequestType<typeof client.branches.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.branches.$head(args, options))
}

export async function getBusinessCurrentAccounts(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-current-accounts'].$get(args, options))
}

export async function headBusinessCurrentAccounts(
  args: InferRequestType<(typeof client)['business-current-accounts']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-current-accounts'].$head(args, options))
}

export async function getCommercialCreditCards(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['commercial-credit-cards'].$get(args, options))
}

export async function headCommercialCreditCards(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['commercial-credit-cards'].$head(args, options))
}

export async function getPersonalCurrentAccounts(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['personal-current-accounts'].$get(args, options))
}

export async function headPersonalCurrentAccounts(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['personal-current-accounts'].$head(args, options))
}

export async function getUnsecuredSmeLoans(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['unsecured-sme-loans'].$get(args, options))
}

export async function headUnsecuredSmeLoans(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['unsecured-sme-loans'].$head(args, options))
}
