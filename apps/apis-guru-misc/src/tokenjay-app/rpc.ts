import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAgeusdInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.ageusd.info.$get(undefined, options))
}

export async function getCancelbabelBoxId(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelbabel[':boxId'].$get(args, options))
}

export async function getCreatebabelAddress(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createbabel[':address'].$get(args, options))
}

export async function getMosaikBabelfeeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.mosaik.babelfee.index.$get(undefined, options))
}

export async function getMosaikBabelfeeNewoffer(options?: ClientRequestOptions) {
  return await parseResponse(client.mosaik.babelfee.newoffer.$get(undefined, options))
}

export async function postMosaikBabelfeeNewofferDoit(
  args: InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mosaik.babelfee.newoffer.doit.$post(args, options))
}

export async function postMosaikBabelfeeNewofferNewInput(
  args: InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mosaik.babelfee.newoffer['new-input'].$post(args, options))
}

export async function getMosaikBabelfeeNotificationcheck(options?: ClientRequestOptions) {
  return await parseResponse(client.mosaik.babelfee.notificationcheck.$get(undefined, options))
}

export async function getMosaikBoxconsolidationIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.mosaik.boxconsolidation.index.$get(undefined, options))
}

export async function getMosaikBoxconsolidationConsolidateP2pkaddress(
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(args, options),
  )
}

export async function getMosaikTokenburn(options?: ClientRequestOptions) {
  return await parseResponse(client.mosaik.tokenburn.$get(undefined, options))
}

export async function getMosaikTokenburnGetUuid(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mosaik.tokenburn.get[':uuid'].$get(args, options))
}

export async function postMosaikTokenburnPrepare(
  args: InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mosaik.tokenburn.prepare.$post(args, options))
}

export async function postPaymentAddrequest(
  args: InferRequestType<typeof client.payment.addrequest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.addrequest.$post(args, options))
}

export async function getPaymentStateRequestId(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.state[':requestId'].$get(args, options))
}

export async function getPeersList(
  args: InferRequestType<typeof client.peers.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers.list.$get(args, options))
}

export async function getSigrsvExchangeIndex(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sigrsv.exchange.index.$get(args, options))
}

export async function getSigrsvExchangeAmountInfo(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sigrsv.exchange[':amount'].info.$get(args, options))
}

export async function getSigrsvPrice(options?: ClientRequestOptions) {
  return await parseResponse(client.sigrsv.price.$get(undefined, options))
}

export async function getSigusdExchangeIndex(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sigusd.exchange.index.$get(args, options))
}

export async function getSigusdExchangeAmountInfo(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sigusd.exchange[':amount'].info.$get(args, options))
}

export async function getSigusdPrice(options?: ClientRequestOptions) {
  return await parseResponse(client.sigusd.price.$get(undefined, options))
}

export async function getTokensCheckTokenIdTokenName(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.check[':tokenId'][':tokenName'].$get(args, options))
}

export async function getTokensListBlocked(options?: ClientRequestOptions) {
  return await parseResponse(client.tokens.listBlocked.$get(undefined, options))
}

export async function getTokensListGenuine(options?: ClientRequestOptions) {
  return await parseResponse(client.tokens.listGenuine.$get(undefined, options))
}

export async function getTokensPricesAll(options?: ClientRequestOptions) {
  return await parseResponse(client.tokens.prices.all.$get(undefined, options))
}

export async function getTokensPricesTokenId(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.prices[':tokenId'].$get(args, options))
}
