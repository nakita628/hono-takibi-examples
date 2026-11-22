import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$get(args, options))
}

export async function putAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$put(args, options))
}

export async function patchAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$patch(args, options))
}

export async function getBillinginfo(
  args: InferRequestType<typeof client.billinginfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billinginfo.$get(args, options))
}

export async function getBillinginfoAccountId(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billinginfo[':accountId'].$get(args, options))
}

export async function getBillinginfoAccountIdBillingId(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billinginfo[':accountId'][':billingId'].$get(args, options))
}

export async function putBillinginfoAccountIdBillingId(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billinginfo[':accountId'][':billingId'].$put(args, options))
}

export async function patchBillinginfoAccountIdBillingId(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billinginfo[':accountId'][':billingId'].$patch(args, options))
}

export async function getCreatives(
  args: InferRequestType<typeof client.creatives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives.$get(args, options))
}

export async function postCreatives(
  args: InferRequestType<typeof client.creatives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives.$post(args, options))
}

export async function getCreativesAccountIdBuyerCreativeId(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives[':accountId'][':buyerCreativeId'].$get(args, options))
}

export async function postCreativesAccountIdBuyerCreativeIdAddDealDealId(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.creatives[':accountId'][':buyerCreativeId'].addDeal[':dealId'].$post(args, options),
  )
}

export async function getCreativesAccountIdBuyerCreativeIdListDeals(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(args, options),
  )
}

export async function postCreativesAccountIdBuyerCreativeIdRemoveDealDealId(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.creatives[':accountId'][':buyerCreativeId'].removeDeal[':dealId'].$post(args, options),
  )
}

export async function getPerformancereport(
  args: InferRequestType<typeof client.performancereport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.performancereport.$get(args, options))
}

export async function getPretargetingconfigsAccountId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pretargetingconfigs[':accountId'].$get(args, options))
}

export async function postPretargetingconfigsAccountId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pretargetingconfigs[':accountId'].$post(args, options))
}

export async function getPretargetingconfigsAccountIdConfigId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pretargetingconfigs[':accountId'][':configId'].$get(args, options),
  )
}

export async function putPretargetingconfigsAccountIdConfigId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pretargetingconfigs[':accountId'][':configId'].$put(args, options),
  )
}

export async function deletePretargetingconfigsAccountIdConfigId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pretargetingconfigs[':accountId'][':configId'].$delete(args, options),
  )
}

export async function patchPretargetingconfigsAccountIdConfigId(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pretargetingconfigs[':accountId'][':configId'].$patch(args, options),
  )
}

export async function postPrivateauctionPrivateAuctionIdUpdateproposal(
  args: InferRequestType<
    (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.privateauction[':privateAuctionId'].updateproposal.$post(args, options),
  )
}

export async function getProductsSearch(
  args: InferRequestType<typeof client.products.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.search.$get(args, options))
}

export async function getProductsProductId(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':productId'].$get(args, options))
}

export async function postProposalsInsert(
  args: InferRequestType<typeof client.proposals.insert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals.insert.$post(args, options))
}

export async function getProposalsSearch(
  args: InferRequestType<typeof client.proposals.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals.search.$get(args, options))
}

export async function getProposalsProposalId(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].$get(args, options))
}

export async function getProposalsProposalIdDeals(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].deals.$get(args, options))
}

export async function postProposalsProposalIdDealsDelete(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].deals.delete.$post(args, options))
}

export async function postProposalsProposalIdDealsInsert(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].deals.insert.$post(args, options))
}

export async function postProposalsProposalIdDealsUpdate(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].deals.update.$post(args, options))
}

export async function getProposalsProposalIdNotes(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].notes.$get(args, options))
}

export async function postProposalsProposalIdNotesInsert(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].notes.insert.$post(args, options))
}

export async function postProposalsProposalIdSetupcomplete(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proposals[':proposalId'].setupcomplete.$post(args, options))
}

export async function putProposalsProposalIdRevisionNumberUpdateAction(
  args: InferRequestType<
    (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$put(args, options),
  )
}

export async function patchProposalsProposalIdRevisionNumberUpdateAction(
  args: InferRequestType<
    (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$patch(args, options),
  )
}

export async function getPublisherAccountIdProfiles(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publisher[':accountId'].profiles.$get(args, options))
}
