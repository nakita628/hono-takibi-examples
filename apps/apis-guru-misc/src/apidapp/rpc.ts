import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function options(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$options(undefined, options))
}

export async function postAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$post(undefined, options))
}

export async function optionsAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$options(undefined, options))
}

export async function getAccountId(
  args: InferRequestType<(typeof client.account)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':id'].$get(args, options))
}

export async function optionsAccountId(
  args: InferRequestType<(typeof client.account)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':id'].$options(args, options))
}

export async function getBlock(options?: ClientRequestOptions) {
  return await parseResponse(client.block.$get(undefined, options))
}

export async function optionsBlock(options?: ClientRequestOptions) {
  return await parseResponse(client.block.$options(undefined, options))
}

export async function getBlockId(
  args: InferRequestType<(typeof client.block)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].$get(args, options))
}

export async function optionsBlockId(
  args: InferRequestType<(typeof client.block)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].$options(args, options))
}

export async function getBlockIdTransaction(
  args: InferRequestType<(typeof client.block)[':id']['transaction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].transaction.$get(args, options))
}

export async function optionsBlockIdTransaction(
  args: InferRequestType<(typeof client.block)[':id']['transaction']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].transaction.$options(args, options))
}

export async function getBlockIdTransactionIndex(
  args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].transaction[':index'].$get(args, options))
}

export async function optionsBlockIdTransactionIndex(
  args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.block[':id'].transaction[':index'].$options(args, options))
}

export async function getBlockchain(options?: ClientRequestOptions) {
  return await parseResponse(client.blockchain.$get(undefined, options))
}

export async function optionsBlockchain(options?: ClientRequestOptions) {
  return await parseResponse(client.blockchain.$options(undefined, options))
}

export async function getBlockchainId(
  args: InferRequestType<(typeof client.blockchain)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blockchain[':id'].$get(args, options))
}

export async function optionsBlockchainId(
  args: InferRequestType<(typeof client.blockchain)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blockchain[':id'].$options(args, options))
}

export async function postContract(options?: ClientRequestOptions) {
  return await parseResponse(client.contract.$post(undefined, options))
}

export async function optionsContract(options?: ClientRequestOptions) {
  return await parseResponse(client.contract.$options(undefined, options))
}

export async function getContractId(
  args: InferRequestType<(typeof client.contract)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contract[':id'].$get(args, options))
}

export async function postContractId(
  args: InferRequestType<(typeof client.contract)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contract[':id'].$post(args, options))
}

export async function optionsContractId(
  args: InferRequestType<(typeof client.contract)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contract[':id'].$options(args, options))
}

export async function optionsEcho(options?: ClientRequestOptions) {
  return await parseResponse(client.echo.$options(undefined, options))
}

export async function getErc20(options?: ClientRequestOptions) {
  return await parseResponse(client.erc20.$get(undefined, options))
}

export async function postErc20(options?: ClientRequestOptions) {
  return await parseResponse(client.erc20.$post(undefined, options))
}

export async function optionsErc20(options?: ClientRequestOptions) {
  return await parseResponse(client.erc20.$options(undefined, options))
}

export async function getErc20Address(
  args: InferRequestType<(typeof client.erc20)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.erc20[':address'].$get(args, options))
}

export async function postErc20Address(
  args: InferRequestType<(typeof client.erc20)[':address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.erc20[':address'].$post(args, options))
}

export async function optionsErc20Address(
  args: InferRequestType<(typeof client.erc20)[':address']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.erc20[':address'].$options(args, options))
}

export async function getKey(
  args: InferRequestType<typeof client.key.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key.$get(args, options))
}

export async function postKey(options?: ClientRequestOptions) {
  return await parseResponse(client.key.$post(undefined, options))
}

export async function optionsKey(options?: ClientRequestOptions) {
  return await parseResponse(client.key.$options(undefined, options))
}

export async function deleteKeyKey(
  args: InferRequestType<(typeof client.key)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':key'].$delete(args, options))
}

export async function optionsKeyKey(
  args: InferRequestType<(typeof client.key)[':key']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key[':key'].$options(args, options))
}

export async function postTransaction(options?: ClientRequestOptions) {
  return await parseResponse(client.transaction.$post(undefined, options))
}

export async function optionsTransaction(options?: ClientRequestOptions) {
  return await parseResponse(client.transaction.$options(undefined, options))
}

export async function getTransactionHash(
  args: InferRequestType<(typeof client.transaction)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':hash'].$get(args, options))
}

export async function optionsTransactionHash(
  args: InferRequestType<(typeof client.transaction)[':hash']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':hash'].$options(args, options))
}

export async function getTransactionHashReceipt(
  args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':hash'].receipt.$get(args, options))
}

export async function optionsTransactionHashReceipt(
  args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':hash'].receipt.$options(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}

export async function optionsVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$options(undefined, options))
}

export async function getWallet(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.$get(undefined, options))
}

export async function postWallet(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.$post(undefined, options))
}

export async function optionsWallet(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.$options(undefined, options))
}

export async function getWalletAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.account.$get(undefined, options))
}

export async function postWalletAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.account.$post(undefined, options))
}

export async function optionsWalletAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.wallet.account.$options(undefined, options))
}

export async function getWalletAccountId(
  args: InferRequestType<(typeof client.wallet.account)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].$get(args, options))
}

export async function optionsWalletAccountId(
  args: InferRequestType<(typeof client.wallet.account)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].$options(args, options))
}

export async function postWalletAccountIdContract(
  args: InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].contract.$post(args, options))
}

export async function postWalletAccountIdErc20(
  args: InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].erc20.$post(args, options))
}

export async function postWalletAccountIdPay(
  args: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].pay.$post(args, options))
}

export async function optionsWalletAccountIdPay(
  args: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.account[':id'].pay.$options(args, options))
}
