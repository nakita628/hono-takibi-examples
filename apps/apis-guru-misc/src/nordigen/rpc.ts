import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2AccountsPremiumIdTransactionsIndex(
  args: InferRequestType<
    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts.premium[':id'].transactions.index.$get(args, options),
  )
}

export async function getApiV2AccountsIdIndex(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts[':id'].index.$get(args, options))
}

export async function getApiV2AccountsIdBalancesIndex(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts[':id'].balances.index.$get(args, options))
}

export async function getApiV2AccountsIdDetailsIndex(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts[':id'].details.index.$get(args, options))
}

export async function getApiV2AccountsIdTransactionsIndex(
  args: InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts[':id'].transactions.index.$get(args, options))
}

export async function getApiV2AgreementsEnduserIndex(
  args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agreements.enduser.index.$get(args, options))
}

export async function postApiV2AgreementsEnduserIndex(
  args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agreements.enduser.index.$post(args, options))
}

export async function getApiV2AgreementsEnduserIdIndex(
  args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agreements.enduser[':id'].index.$get(args, options))
}

export async function deleteApiV2AgreementsEnduserIdIndex(
  args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agreements.enduser[':id'].index.$delete(args, options))
}

export async function putApiV2AgreementsEnduserIdAcceptIndex(
  args: InferRequestType<
    (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agreements.enduser[':id'].accept.index.$put(args, options),
  )
}

export async function getApiV2InstitutionsIndex(
  args: InferRequestType<typeof client.api.v2.institutions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.institutions.index.$get(args, options))
}

export async function getApiV2InstitutionsIdIndex(
  args: InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.institutions[':id'].index.$get(args, options))
}

export async function getApiV2PaymentsIndex(
  args: InferRequestType<typeof client.api.v2.payments.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.index.$get(args, options))
}

export async function postApiV2PaymentsIndex(
  args: InferRequestType<typeof client.api.v2.payments.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.index.$post(args, options))
}

export async function getApiV2PaymentsAccountIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.payments.account.index.$get(undefined, options))
}

export async function getApiV2PaymentsCreditorsIndex(
  args: InferRequestType<typeof client.api.v2.payments.creditors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.creditors.index.$get(args, options))
}

export async function postApiV2PaymentsCreditorsIndex(
  args: InferRequestType<typeof client.api.v2.payments.creditors.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.creditors.index.$post(args, options))
}

export async function getApiV2PaymentsCreditorsIdIndex(
  args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.creditors[':id'].index.$get(args, options))
}

export async function deleteApiV2PaymentsCreditorsIdIndex(
  args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments.creditors[':id'].index.$delete(args, options))
}

export async function getApiV2PaymentsFieldsInstitutionIdIndex(
  args: InferRequestType<
    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.payments.fields[':institution_id'].index.$get(args, options),
  )
}

export async function getApiV2PaymentsIdIndex(
  args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments[':id'].index.$get(args, options))
}

export async function deleteApiV2PaymentsIdIndex(
  args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.payments[':id'].index.$delete(args, options))
}

export async function getApiV2RequisitionsIndex(
  args: InferRequestType<typeof client.api.v2.requisitions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requisitions.index.$get(args, options))
}

export async function postApiV2RequisitionsIndex(
  args: InferRequestType<typeof client.api.v2.requisitions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requisitions.index.$post(args, options))
}

export async function getApiV2RequisitionsIdIndex(
  args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requisitions[':id'].index.$get(args, options))
}

export async function deleteApiV2RequisitionsIdIndex(
  args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requisitions[':id'].index.$delete(args, options))
}

export async function postApiV2TokenNewIndex(
  args: InferRequestType<typeof client.api.v2.token.new.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.token.new.index.$post(args, options))
}

export async function postApiV2TokenRefreshIndex(
  args: InferRequestType<typeof client.api.v2.token.refresh.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.token.refresh.index.$post(args, options))
}
