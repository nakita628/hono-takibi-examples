import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AuctionPackageSubscribeClients(
  args: InferRequestType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':auctionPackage:subscribeClients'].$post(args, options))
}

export async function postV1AuctionPackageUnsubscribeClients(
  args: InferRequestType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':auctionPackage:unsubscribeClients'].$post(args, options))
}

export async function postV1BuyerProposalsSendRfp(
  args: InferRequestType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':buyer']['proposals:sendRfp'].$post(args, options))
}

export async function postV1DealAddCreative(
  args: InferRequestType<(typeof client.v1)[':deal:addCreative']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':deal:addCreative'].$post(args, options))
}

export async function postV1DealSetReadyToServe(
  args: InferRequestType<(typeof client.v1)[':deal:setReadyToServe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':deal:setReadyToServe'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameAccept(
  args: InferRequestType<(typeof client.v1)[':name:accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:accept'].$post(args, options))
}

export async function postV1NameActivate(
  args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:activate'].$post(args, options))
}

export async function postV1NameDeactivate(
  args: InferRequestType<(typeof client.v1)[':name:deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:deactivate'].$post(args, options))
}

export async function postV1NamePause(
  args: InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:pause'].$post(args, options))
}

export async function postV1NameResume(
  args: InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:resume'].$post(args, options))
}

export async function postV1NameSubscribe(
  args: InferRequestType<(typeof client.v1)[':name:subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:subscribe'].$post(args, options))
}

export async function postV1NameUnsubscribe(
  args: InferRequestType<(typeof client.v1)[':name:unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:unsubscribe'].$post(args, options))
}

export async function getV1ParentAuctionPackages(
  args: InferRequestType<(typeof client.v1)[':parent']['auctionPackages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].auctionPackages.$get(args, options))
}

export async function getV1ParentClients(
  args: InferRequestType<(typeof client.v1)[':parent']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].clients.$get(args, options))
}

export async function postV1ParentClients(
  args: InferRequestType<(typeof client.v1)[':parent']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].clients.$post(args, options))
}

export async function getV1ParentDeals(
  args: InferRequestType<(typeof client.v1)[':parent']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deals.$get(args, options))
}

export async function postV1ParentDealsBatchUpdate(
  args: InferRequestType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['deals:batchUpdate'].$post(args, options))
}

export async function getV1ParentFinalizedDeals(
  args: InferRequestType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].finalizedDeals.$get(args, options))
}

export async function getV1ParentProposals(
  args: InferRequestType<(typeof client.v1)[':parent']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].proposals.$get(args, options))
}

export async function getV1ParentPublisherProfiles(
  args: InferRequestType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].publisherProfiles.$get(args, options))
}

export async function getV1ParentUsers(
  args: InferRequestType<(typeof client.v1)[':parent']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].users.$get(args, options))
}

export async function postV1ParentUsers(
  args: InferRequestType<(typeof client.v1)[':parent']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].users.$post(args, options))
}

export async function postV1ProposalAddNote(
  args: InferRequestType<(typeof client.v1)[':proposal:addNote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':proposal:addNote'].$post(args, options))
}

export async function postV1ProposalCancelNegotiation(
  args: InferRequestType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':proposal:cancelNegotiation'].$post(args, options))
}
