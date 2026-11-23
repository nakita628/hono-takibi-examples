import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postLogout(
  args: InferRequestType<typeof client.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logout.$post(args, options))
}

export async function postEnableservice(
  args: InferRequestType<typeof client.enableservice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enableservice.$post(args, options))
}

export async function postAdmin(
  args: InferRequestType<typeof client.admin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.$post(args, options))
}

export async function postPayment(
  args: InferRequestType<typeof client.payment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.$post(args, options))
}

export async function postCardacquisition(
  args: InferRequestType<typeof client.cardacquisition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cardacquisition.$post(args, options))
}

export async function postStoredvalue(
  args: InferRequestType<typeof client.storedvalue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storedvalue.$post(args, options))
}

export async function postReversal(
  args: InferRequestType<typeof client.reversal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reversal.$post(args, options))
}

export async function postReconciliation(
  args: InferRequestType<typeof client.reconciliation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reconciliation.$post(args, options))
}

export async function postGettotals(
  args: InferRequestType<typeof client.gettotals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gettotals.$post(args, options))
}

export async function postBalanceinquiry(
  args: InferRequestType<typeof client.balanceinquiry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balanceinquiry.$post(args, options))
}

export async function postTransactionstatus(
  args: InferRequestType<typeof client.transactionstatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionstatus.$post(args, options))
}

export async function postAbort(
  args: InferRequestType<typeof client.abort.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.abort.$post(args, options))
}

export async function postDiagnosis(
  args: InferRequestType<typeof client.diagnosis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.diagnosis.$post(args, options))
}

export async function postDisplay(
  args: InferRequestType<typeof client.display.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.display.$post(args, options))
}

export async function postInput(
  args: InferRequestType<typeof client.input.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.input.$post(args, options))
}

export async function postPrint(
  args: InferRequestType<typeof client.print.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.print.$post(args, options))
}
