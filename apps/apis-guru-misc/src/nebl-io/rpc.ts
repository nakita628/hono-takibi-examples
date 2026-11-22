import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getInsAddrAddress(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].$get(args, options))
}

export async function getInsAddrAddressBalance(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].balance.$get(args, options))
}

export async function getInsAddrAddressTotalReceived(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].totalReceived.$get(args, options))
}

export async function getInsAddrAddressTotalSent(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].totalSent.$get(args, options))
}

export async function getInsAddrAddressUnconfirmedBalance(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].unconfirmedBalance.$get(args, options))
}

export async function getInsAddrAddressUtxo(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.addr[':address'].utxo.$get(args, options))
}

export async function getInsBlockIndexBlockindex(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins['block-index'][':blockindex'].$get(args, options))
}

export async function getInsBlockBlockhash(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.block[':blockhash'].$get(args, options))
}

export async function getInsRawtxTxid(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.rawtx[':txid'].$get(args, options))
}

export async function getInsStatus(
  args: InferRequestType<typeof client.ins.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.status.$get(args, options))
}

export async function getInsSync(options?: ClientRequestOptions) {
  return await parseResponse(client.ins.sync.$get(undefined, options))
}

export async function postInsTxSend(
  args: InferRequestType<typeof client.ins.tx.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.tx.send.$post(args, options))
}

export async function getInsTxTxid(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.tx[':txid'].$get(args, options))
}

export async function getInsTxs(
  args: InferRequestType<typeof client.ins.txs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ins.txs.$get(args, options))
}

export async function getNtp1AddressinfoAddress(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.addressinfo[':address'].$get(args, options))
}

export async function postNtp1Broadcast(
  args: InferRequestType<typeof client.ntp1.broadcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.broadcast.$post(args, options))
}

export async function postNtp1Burntoken(
  args: InferRequestType<typeof client.ntp1.burntoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.burntoken.$post(args, options))
}

export async function postNtp1Issue(
  args: InferRequestType<typeof client.ntp1.issue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.issue.$post(args, options))
}

export async function postNtp1Sendtoken(
  args: InferRequestType<typeof client.ntp1.sendtoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.sendtoken.$post(args, options))
}

export async function getNtp1StakeholdersTokenid(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.stakeholders[':tokenid'].$get(args, options))
}

export async function getNtp1TokenidTokensymbol(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.tokenid[':tokensymbol'].$get(args, options))
}

export async function getNtp1TokenmetadataTokenid(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.tokenmetadata[':tokenid'].$get(args, options))
}

export async function getNtp1TokenmetadataTokenidUtxo(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, options))
}

export async function getNtp1TransactioninfoTxid(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntp1.transactioninfo[':txid'].$get(args, options))
}

export async function getTestnetFaucet(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.faucet.$get(args, options))
}

export async function getTestnetInsAddrAddress(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.addr[':address'].$get(args, options))
}

export async function getTestnetInsAddrAddressBalance(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.addr[':address'].balance.$get(args, options))
}

export async function getTestnetInsAddrAddressTotalReceived(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.addr[':address'].totalReceived.$get(args, options))
}

export async function getTestnetInsAddrAddressTotalSent(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.addr[':address'].totalSent.$get(args, options))
}

export async function getTestnetInsAddrAddressUnconfirmedBalance(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.testnet.ins.addr[':address'].unconfirmedBalance.$get(args, options),
  )
}

export async function getTestnetInsAddrAddressUtxo(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.addr[':address'].utxo.$get(args, options))
}

export async function getTestnetInsBlockIndexBlockindex(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins['block-index'][':blockindex'].$get(args, options))
}

export async function getTestnetInsBlockBlockhash(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.block[':blockhash'].$get(args, options))
}

export async function getTestnetInsRawtxTxid(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.rawtx[':txid'].$get(args, options))
}

export async function getTestnetInsStatus(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.status.$get(args, options))
}

export async function getTestnetInsSync(options?: ClientRequestOptions) {
  return await parseResponse(client.testnet.ins.sync.$get(undefined, options))
}

export async function postTestnetInsTxSend(
  args: InferRequestType<typeof client.testnet.ins.tx.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.tx.send.$post(args, options))
}

export async function getTestnetInsTxTxid(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.tx[':txid'].$get(args, options))
}

export async function getTestnetInsTxs(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ins.txs.$get(args, options))
}

export async function getTestnetNtp1AddressinfoAddress(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.addressinfo[':address'].$get(args, options))
}

export async function postTestnetNtp1Broadcast(
  args: InferRequestType<typeof client.testnet.ntp1.broadcast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.broadcast.$post(args, options))
}

export async function postTestnetNtp1Burntoken(
  args: InferRequestType<typeof client.testnet.ntp1.burntoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.burntoken.$post(args, options))
}

export async function postTestnetNtp1Issue(
  args: InferRequestType<typeof client.testnet.ntp1.issue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.issue.$post(args, options))
}

export async function postTestnetNtp1Sendtoken(
  args: InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.sendtoken.$post(args, options))
}

export async function getTestnetNtp1StakeholdersTokenid(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.stakeholders[':tokenid'].$get(args, options))
}

export async function getTestnetNtp1TokenidTokensymbol(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.tokenid[':tokensymbol'].$get(args, options))
}

export async function getTestnetNtp1TokenmetadataTokenid(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.tokenmetadata[':tokenid'].$get(args, options))
}

export async function getTestnetNtp1TokenmetadataTokenidUtxo(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, options),
  )
}

export async function getTestnetNtp1TransactioninfoTxid(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testnet.ntp1.transactioninfo[':txid'].$get(args, options))
}
