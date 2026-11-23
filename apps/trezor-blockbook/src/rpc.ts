import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.status.$get(undefined, options))
}

export async function getApiIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.index.$get(undefined, options))
}

export async function getApiV2BlockIndexHeight(
  args: InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['block-index'][':height'].$get(args, options))
}

export async function getApiV2BlockBlockId(
  args: InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.block[':blockId'].$get(args, options))
}

export async function getApiV2RawblockBlockId(
  args: InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rawblock[':blockId'].$get(args, options))
}

export async function getApiV2BlockFiltersIndex(
  args: InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['block-filters'].index.$get(args, options))
}

export async function getApiV2TxTxid(
  args: InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tx[':txid'].$get(args, options))
}

export async function getApiV2TxSpecificTxid(
  args: InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['tx-specific'][':txid'].$get(args, options))
}

export async function getApiRawtxTxid(
  args: InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rawtx[':txid'].$get(args, options))
}

export async function getApiV2SendtxHex(
  args: InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sendtx[':hex'].$get(args, options))
}

export async function postApiV2SendtxIndex(
  args: InferRequestType<typeof client.api.v2.sendtx.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sendtx.index.$post(args, options))
}

export async function getApiV2AddressAddress(
  args: InferRequestType<(typeof client.api.v2.address)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.address[':address'].$get(args, options))
}

export async function getApiV2XpubXpub(
  args: InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.xpub[':xpub'].$get(args, options))
}

export async function getApiV2UtxoDescriptor(
  args: InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.utxo[':descriptor'].$get(args, options))
}

export async function getApiV2BalancehistoryDescriptor(
  args: InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.balancehistory[':descriptor'].$get(args, options))
}

export async function getApiV2ContractContract(
  args: InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.contract[':contract'].$get(args, options))
}

export async function getApiV2EstimatefeeBlocks(
  args: InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.estimatefee[':blocks'].$get(args, options))
}

export async function getApiV2FeestatsBlockId(
  args: InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.feestats[':blockId'].$get(args, options))
}

export async function getApiV2TickersIndex(
  args: InferRequestType<typeof client.api.v2.tickers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickers.index.$get(args, options))
}

export async function getApiV2MultiTickersIndex(
  args: InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['multi-tickers'].index.$get(args, options))
}

export async function getApiV2TickersListIndex(
  args: InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['tickers-list'].index.$get(args, options))
}

export async function getApiV1BlockIndexHeight(
  args: InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['block-index'][':height'].$get(args, options))
}

export async function getApiV1TxTxid(
  args: InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tx[':txid'].$get(args, options))
}

export async function getApiV1AddressAddress(
  args: InferRequestType<(typeof client.api.v1.address)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.address[':address'].$get(args, options))
}

export async function getApiV1UtxoAddress(
  args: InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.utxo[':address'].$get(args, options))
}

export async function getApiV1BlockBlockId(
  args: InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.block[':blockId'].$get(args, options))
}

export async function getApiV1EstimatefeeBlocks(
  args: InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.estimatefee[':blocks'].$get(args, options))
}

export async function getApiV1SendtxHex(
  args: InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sendtx[':hex'].$get(args, options))
}

export async function postApiV1SendtxIndex(
  args: InferRequestType<typeof client.api.v1.sendtx.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sendtx.index.$post(args, options))
}

export async function getWebsocket(options?: ClientRequestOptions) {
  return await parseResponse(client.websocket.$get(undefined, options))
}
