import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postClearAddress(
  args: InferRequestType<typeof client.clearAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clearAddress.$post(args, options))
}

export async function postDeleteAddress(
  args: InferRequestType<typeof client.deleteAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteAddress.$post(args, options))
}

export async function postExportAddress(
  args: InferRequestType<typeof client.exportAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exportAddress.$post(args, options))
}

export async function postGetBlock(
  args: InferRequestType<typeof client.getBlock.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getBlock.$post(args, options))
}

export async function postGetEthereumBalance(
  args: InferRequestType<typeof client.getEthereumBalance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getEthereumBalance.$post(args, options))
}

export async function postGetExchangeRate(
  args: InferRequestType<typeof client.getExchangeRate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getExchangeRate.$post(args, options))
}

export async function postGetGasPrice(
  args: InferRequestType<typeof client.getGasPrice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getGasPrice.$post(args, options))
}

export async function postGetLastBlockNumber(
  args: InferRequestType<typeof client.getLastBlockNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getLastBlockNumber.$post(args, options))
}

export async function postGetToken(
  args: InferRequestType<typeof client.getToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getToken.$post(args, options))
}

export async function postGetTokenBalance(
  args: InferRequestType<typeof client.getTokenBalance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getTokenBalance.$post(args, options))
}

export async function postGetTransactions(
  args: InferRequestType<typeof client.getTransactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getTransactions.$post(args, options))
}

export async function postImportAddress(
  args: InferRequestType<typeof client.importAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.importAddress.$post(args, options))
}

export async function postListAddresses(
  args: InferRequestType<typeof client.listAddresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listAddresses.$post(args, options))
}

export async function postListFailedIPNs(
  args: InferRequestType<typeof client.listFailedIPNs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listFailedIPNs.$post(args, options))
}

export async function postListSubscribedAddresses(
  args: InferRequestType<typeof client.listSubscribedAddresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSubscribedAddresses.$post(args, options))
}

export async function postNewAddress(
  args: InferRequestType<typeof client.newAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.newAddress.$post(args, options))
}

export async function postResendFailedIPN(
  args: InferRequestType<typeof client.resendFailedIPN.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resendFailedIPN.$post(args, options))
}

export async function postSendEthereum(
  args: InferRequestType<typeof client.sendEthereum.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendEthereum.$post(args, options))
}

export async function postSendToken(
  args: InferRequestType<typeof client.sendToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendToken.$post(args, options))
}

export async function postSubscribeAddress(
  args: InferRequestType<typeof client.subscribeAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribeAddress.$post(args, options))
}

export async function postUnsubscribeAddress(
  args: InferRequestType<typeof client.unsubscribeAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unsubscribeAddress.$post(args, options))
}
