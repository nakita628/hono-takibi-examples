import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Accounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.accounts.$get(undefined, options))
}

export async function postV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$post(args, options))
}

export async function getV1AccountsIcan(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':ican'].$get(args, options))
}

export async function getV1AccountsIcanTransactions(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':ican'].transactions.$get(args, options))
}

export async function getV1AccountsIcanTransactionsFilter(
  args: InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':ican'].transactions.filter.$get(args, options))
}

export async function postV1Apps(
  args: InferRequestType<typeof client.v1.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.$post(args, options))
}

export async function postV1AppsAccesstokens(
  args: InferRequestType<typeof client.v1.apps.accesstokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.accesstokens.$post(args, options))
}

export async function getV1Aspsps(
  args: InferRequestType<typeof client.v1.aspsps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.aspsps.$get(args, options))
}

export async function getV1Batches(
  args: InferRequestType<typeof client.v1.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$get(args, options))
}

export async function postV1Batches(
  args: InferRequestType<typeof client.v1.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$post(args, options))
}

export async function getV1BatchesBatchUuid(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].$get(args, options))
}

export async function putV1BatchesBatchUuid(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].$put(args, options))
}

export async function deleteV1BatchesBatchUuid(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].$delete(args, options))
}

export async function getV1BatchesBatchUuidApprovals(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].approvals.$get(args, options))
}

export async function getV1BatchesBatchUuidBanktransfers(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].banktransfers.$get(args, options))
}

export async function postV1BatchesBatchUuidBanktransfers(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].banktransfers.$post(args, options))
}

export async function deleteV1BatchesBatchUuidBanktransfersItemUuid(
  args: InferRequestType<
    (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.batches[':batchUuid'].banktransfers[':itemUuid'].$delete(args, options),
  )
}

export async function getV1BatchesBatchUuidInternaltransfers(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].internaltransfers.$get(args, options))
}

export async function postV1BatchesBatchUuidInternaltransfers(
  args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batchUuid'].internaltransfers.$post(args, options))
}

export async function deleteV1BatchesBatchUuidInternaltransfersItemUuid(
  args: InferRequestType<
    (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.batches[':batchUuid'].internaltransfers[':itemUuid'].$delete(args, options),
  )
}

export async function getV1Cards(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.cards.$get(undefined, options))
}

export async function postV1Cards(
  args: InferRequestType<typeof client.v1.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards.$post(args, options))
}

export async function postV1CardsCardIdBlock(
  args: InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':cardId'].block.$post(args, options))
}

export async function getV1CardsCardIdTransactions(
  args: InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':cardId'].transactions.$get(args, options))
}

export async function postV1CardsCardIdUnblock(
  args: InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cards[':cardId'].unblock.$post(args, options))
}

export async function getV1Directdebits(
  args: InferRequestType<typeof client.v1.directdebits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.directdebits.$get(args, options))
}

export async function getV1DirectdebitsDirectDebitUuid(
  args: InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.directdebits[':directDebitUuid'].$get(args, options))
}

export async function postV1DirectdebitsDirectDebitUuidReject(
  args: InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.directdebits[':directDebitUuid'].reject.$post(args, options))
}

export async function getV1Mandates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.mandates.$get(undefined, options))
}

export async function getV1MandatesMandateUuid(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.mandates[':mandateUuid'].$get(args, options))
}

export async function postV1MandatesMandateUuid(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.mandates[':mandateUuid'].$post(args, options))
}

export async function postV1MandatesMandateUuidActivate(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.mandates[':mandateUuid'].activate.$post(args, options))
}

export async function postV1MandatesMandateUuidCancel(
  args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.mandates[':mandateUuid'].cancel.$post(args, options))
}

export async function getV1Payees(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.payees.$get(undefined, options))
}

export async function postV1Paymentrequests(
  args: InferRequestType<typeof client.v1.paymentrequests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.paymentrequests.$post(args, options))
}

export async function getV1PaymentsPaymentUuid(
  args: InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentUuid'].$get(args, options))
}

export async function getV1UserUserId(
  args: InferRequestType<(typeof client.v1.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user[':userId'].$get(args, options))
}

export async function getV1Users(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.$get(undefined, options))
}

export async function getV3AccountsIcanTransactions(
  args: InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.accounts[':ican'].transactions.$get(args, options))
}
