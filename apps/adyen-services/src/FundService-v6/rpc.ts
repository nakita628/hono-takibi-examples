import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountHolderBalance(
  args: InferRequestType<typeof client.accountHolderBalance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolderBalance.$post(args, options))
}

export async function postAccountHolderTransactionList(
  args: InferRequestType<typeof client.accountHolderTransactionList.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountHolderTransactionList.$post(args, options))
}

export async function postDebitAccountHolder(
  args: InferRequestType<typeof client.debitAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debitAccountHolder.$post(args, options))
}

export async function postPayoutAccountHolder(
  args: InferRequestType<typeof client.payoutAccountHolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payoutAccountHolder.$post(args, options))
}

export async function postRefundFundsTransfer(
  args: InferRequestType<typeof client.refundFundsTransfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refundFundsTransfer.$post(args, options))
}

export async function postRefundNotPaidOutTransfers(
  args: InferRequestType<typeof client.refundNotPaidOutTransfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refundNotPaidOutTransfers.$post(args, options))
}

export async function postSetupBeneficiary(
  args: InferRequestType<typeof client.setupBeneficiary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setupBeneficiary.$post(args, options))
}

export async function postTransferFunds(
  args: InferRequestType<typeof client.transferFunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferFunds.$post(args, options))
}
