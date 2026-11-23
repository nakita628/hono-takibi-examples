import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2beta1AccountsAccountIdClients(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].clients.$get(args, options))
}

export async function postV2beta1AccountsAccountIdClients(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].clients.$post(args, options))
}

export async function getV2beta1AccountsAccountIdClientsClientAccountId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(args, options),
  )
}

export async function putV2beta1AccountsAccountIdClientsClientAccountId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$put(args, options),
  )
}

export async function getV2beta1AccountsAccountIdClientsClientAccountIdInvitations(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdClientsClientAccountIdInvitations(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$post(
      args,
      options,
    ),
  )
}

export async function getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
      ':invitationId'
    ].$get(args, options),
  )
}

export async function getV2beta1AccountsAccountIdClientsClientAccountIdUsers(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(args, options),
  )
}

export async function getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
      args,
      options,
    ),
  )
}

export async function putV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$put(
      args,
      options,
    ),
  )
}

export async function getV2beta1AccountsAccountIdCreatives(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].creatives.$get(args, options))
}

export async function postV2beta1AccountsAccountIdCreatives(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].creatives.$post(args, options))
}

export async function getV2beta1AccountsAccountIdCreativesCreativeId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(args, options),
  )
}

export async function putV2beta1AccountsAccountIdCreativesCreativeId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$put(args, options),
  )
}

export async function getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociations(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAdd(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId']['dealAssociations:add'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemove(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId']['dealAssociations:remove'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdCreativesCreativeIdStopWatching(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId:stopWatching'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdCreativesCreativeIdWatch(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].creatives[':creativeId:watch'].$post(args, options),
  )
}

export async function getV2beta1AccountsAccountIdFinalizedProposals(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].finalizedProposals.$get(args, options),
  )
}

export async function postV2beta1AccountsAccountIdFinalizedProposalsProposalIdPause(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:pause'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdFinalizedProposalsProposalIdResume(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:resume'].$post(
      args,
      options,
    ),
  )
}

export async function getV2beta1AccountsAccountIdProducts(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].products.$get(args, options))
}

export async function getV2beta1AccountsAccountIdProductsProductId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].products[':productId'].$get(args, options),
  )
}

export async function getV2beta1AccountsAccountIdProposals(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].proposals.$get(args, options))
}

export async function postV2beta1AccountsAccountIdProposals(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.accounts[':accountId'].proposals.$post(args, options))
}

export async function getV2beta1AccountsAccountIdProposalsProposalId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(args, options),
  )
}

export async function putV2beta1AccountsAccountIdProposalsProposalId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$put(args, options),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdAccept(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:accept'].$post(args, options),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdAddNote(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:addNote'].$post(args, options),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiation(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:cancelNegotiation'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdCompleteSetup(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:completeSetup'].$post(
      args,
      options,
    ),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdPause(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:pause'].$post(args, options),
  )
}

export async function postV2beta1AccountsAccountIdProposalsProposalIdResume(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].proposals[':proposalId:resume'].$post(args, options),
  )
}

export async function getV2beta1AccountsAccountIdPublisherProfiles(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].publisherProfiles.$get(args, options),
  )
}

export async function getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(
      args,
      options,
    ),
  )
}

export async function getV2beta1FilterSetNameBidMetrics(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':filterSetName'].bidMetrics.$get(args, options))
}

export async function getV2beta1FilterSetNameBidResponseErrors(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':filterSetName'].bidResponseErrors.$get(args, options))
}

export async function getV2beta1FilterSetNameBidResponsesWithoutBids(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(args, options),
  )
}

export async function getV2beta1FilterSetNameFilteredBidRequests(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1[':filterSetName'].filteredBidRequests.$get(args, options),
  )
}

export async function getV2beta1FilterSetNameFilteredBids(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':filterSetName'].filteredBids.$get(args, options))
}

export async function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreatives(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(
      args,
      options,
    ),
  )
}

export async function getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetails(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(args, options),
  )
}

export async function getV2beta1FilterSetNameImpressionMetrics(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':filterSetName'].impressionMetrics.$get(args, options))
}

export async function getV2beta1FilterSetNameLosingBids(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':filterSetName'].losingBids.$get(args, options))
}

export async function getV2beta1FilterSetNameNonBillableWinningBids(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(args, options),
  )
}

export async function getV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$get(args, options))
}

export async function deleteV2beta1Name(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':name'].$delete(args, options))
}

export async function getV2beta1OwnerNameFilterSets(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':ownerName'].filterSets.$get(args, options))
}

export async function postV2beta1OwnerNameFilterSets(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1[':ownerName'].filterSets.$post(args, options))
}
