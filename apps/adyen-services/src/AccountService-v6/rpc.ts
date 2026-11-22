import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCheckAccountHolder(
  args: InferRequestType<typeof client.checkAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkAccountHolder.$post(args, options))
}

export async function postCloseAccount(
  args: InferRequestType<typeof client.closeAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.closeAccount.$post(args, options))
}

export async function postCloseAccountHolder(
  args: InferRequestType<typeof client.closeAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.closeAccountHolder.$post(args, options))
}

export async function postCloseStores(
  args: InferRequestType<typeof client.closeStores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.closeStores.$post(args, options))
}

export async function postCreateAccount(
  args: InferRequestType<typeof client.createAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAccount.$post(args, options))
}

export async function postCreateAccountHolder(
  args: InferRequestType<typeof client.createAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAccountHolder.$post(args, options))
}

export async function postDeleteBankAccounts(
  args: InferRequestType<typeof client.deleteBankAccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteBankAccounts.$post(args, options))
}

export async function postDeleteLegalArrangements(
  args: InferRequestType<typeof client.deleteLegalArrangements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteLegalArrangements.$post(args, options))
}

export async function postDeletePayoutMethods(
  args: InferRequestType<typeof client.deletePayoutMethods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deletePayoutMethods.$post(args, options))
}

export async function postDeleteShareholders(
  args: InferRequestType<typeof client.deleteShareholders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteShareholders.$post(args, options))
}

export async function postDeleteSignatories(
  args: InferRequestType<typeof client.deleteSignatories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteSignatories.$post(args, options))
}

export async function postGetAccountHolder(
  args: InferRequestType<typeof client.getAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAccountHolder.$post(args, options))
}

export async function postGetTaxForm(
  args: InferRequestType<typeof client.getTaxForm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getTaxForm.$post(args, options))
}

export async function postGetUploadedDocuments(
  args: InferRequestType<typeof client.getUploadedDocuments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getUploadedDocuments.$post(args, options))
}

export async function postSuspendAccountHolder(
  args: InferRequestType<typeof client.suspendAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suspendAccountHolder.$post(args, options))
}

export async function postUnSuspendAccountHolder(
  args: InferRequestType<typeof client.unSuspendAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unSuspendAccountHolder.$post(args, options))
}

export async function postUpdateAccount(
  args: InferRequestType<typeof client.updateAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateAccount.$post(args, options))
}

export async function postUpdateAccountHolder(
  args: InferRequestType<typeof client.updateAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateAccountHolder.$post(args, options))
}

export async function postUpdateAccountHolderState(
  args: InferRequestType<typeof client.updateAccountHolderState.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateAccountHolderState.$post(args, options))
}

export async function postUploadDocument(
  args: InferRequestType<typeof client.uploadDocument.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploadDocument.$post(args, options))
}
