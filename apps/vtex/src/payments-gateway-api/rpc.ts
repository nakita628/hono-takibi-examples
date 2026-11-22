import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiPubTransactionsTransactionIdPayments(
  args: InferRequestType<
    (typeof client.api.pub.transactions)[':transactionId']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pub.transactions[':transactionId'].payments.$post(args, options),
  )
}

export async function getApiPvtAffiliations(
  args: InferRequestType<typeof client.api.pvt.affiliations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.affiliations.$get(args, options))
}

export async function postApiPvtAffiliations(
  args: InferRequestType<typeof client.api.pvt.affiliations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.affiliations.$post(args, options))
}

export async function getApiPvtAffiliationsAffiliationId(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.affiliations[':affiliationId'].$get(args, options))
}

export async function putApiPvtAffiliationsAffiliationId(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.affiliations[':affiliationId'].$put(args, options))
}

export async function getApiPvtInstallments(
  args: InferRequestType<typeof client.api.pvt.installments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.installments.$get(args, options))
}

export async function getApiPvtMerchantsPaymentSystems(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.merchants['payment-systems'].$get(args, options))
}

export async function getApiPvtRules(
  args: InferRequestType<typeof client.api.pvt.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.rules.$get(args, options))
}

export async function postApiPvtRules(
  args: InferRequestType<typeof client.api.pvt.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.rules.$post(args, options))
}

export async function getApiPvtRulesRuleId(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.rules[':ruleId'].$get(args, options))
}

export async function putApiPvtRulesRuleId(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.rules[':ruleId'].$put(args, options))
}

export async function deleteApiPvtRulesRuleId(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.rules[':ruleId'].$delete(args, options))
}

export async function postApiPvtTransactions(
  args: InferRequestType<typeof client.api.pvt.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.transactions.$post(args, options))
}

export async function getApiPvtTransactionsTransactionId(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvt.transactions[':transactionId'].$get(args, options))
}

export async function postApiPvtTransactionsTransactionIdAdditionalData(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId']['additional-data'].$post(args, options),
  )
}

export async function postApiPvtTransactionsTransactionIdAuthorizationRequest(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId']['authorization-request'].$post(args, options),
  )
}

export async function postApiPvtTransactionsTransactionIdCancellationRequest(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId']['cancellation-request'].$post(args, options),
  )
}

export async function postApiPvtTransactionsTransactionIdPayments(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId'].payments.$post(args, options),
  )
}

export async function getApiPvtTransactionsTransactionIdPaymentsPaymentId(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(args, options),
  )
}

export async function postApiPvtTransactionsTransactionIdRefundingRequest(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId']['refunding-request'].$post(args, options),
  )
}

export async function postApiPvtTransactionsTransactionIdSettlementRequest(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId']['settlement-request'].$post(args, options),
  )
}

export async function getApiPvtTransactionsTransactionIdSettlements(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pvt.transactions[':transactionId'].settlements.$get(args, options),
  )
}
