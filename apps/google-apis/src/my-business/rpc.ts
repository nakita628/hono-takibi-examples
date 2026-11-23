import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV4Accounts(
  args: InferRequestType<typeof client.v4.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.accounts.$get(args, options))
}

export async function postV4Accounts(
  args: InferRequestType<typeof client.v4.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.accounts.$post(args, options))
}

export async function getV4Attributes(
  args: InferRequestType<typeof client.v4.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.attributes.$get(args, options))
}

export async function getV4Categories(
  args: InferRequestType<typeof client.v4.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.categories.$get(args, options))
}

export async function getV4CategoriesBatchGet(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['categories:batchGet'].$get(args, options))
}

export async function getV4ChainsSearch(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['chains:search'].$get(args, options))
}

export async function postV4GoogleLocationsSearch(
  args: InferRequestType<(typeof client.v4)['googleLocations:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['googleLocations:search'].$post(args, options))
}

export async function getV4Name(
  args: InferRequestType<(typeof client.v4)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].$get(args, options))
}

export async function putV4Name(
  args: InferRequestType<(typeof client.v4)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].$put(args, options))
}

export async function deleteV4Name(
  args: InferRequestType<(typeof client.v4)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].$delete(args, options))
}

export async function patchV4Name(
  args: InferRequestType<(typeof client.v4)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].$patch(args, options))
}

export async function postV4NameLocalPostsReportInsights(
  args: InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name']['localPosts:reportInsights'].$post(args, options))
}

export async function postV4NameLocationsBatchGet(
  args: InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name']['locations:batchGet'].$post(args, options))
}

export async function postV4NameLocationsBatchGetReviews(
  args: InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name']['locations:batchGetReviews'].$post(args, options))
}

export async function postV4NameLocationsReportInsights(
  args: InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name']['locations:reportInsights'].$post(args, options))
}

export async function putV4NameReply(
  args: InferRequestType<(typeof client.v4)[':name']['reply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].reply.$put(args, options))
}

export async function deleteV4NameReply(
  args: InferRequestType<(typeof client.v4)[':name']['reply']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name'].reply.$delete(args, options))
}

export async function postV4NameAccept(
  args: InferRequestType<(typeof client.v4)[':name:accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:accept'].$post(args, options))
}

export async function postV4NameAssociate(
  args: InferRequestType<(typeof client.v4)[':name:associate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:associate'].$post(args, options))
}

export async function postV4NameClearAssociation(
  args: InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:clearAssociation'].$post(args, options))
}

export async function postV4NameComplete(
  args: InferRequestType<(typeof client.v4)[':name:complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:complete'].$post(args, options))
}

export async function postV4NameDecline(
  args: InferRequestType<(typeof client.v4)[':name:decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:decline'].$post(args, options))
}

export async function postV4NameFetchVerificationOptions(
  args: InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:fetchVerificationOptions'].$post(args, options))
}

export async function postV4NameFindMatches(
  args: InferRequestType<(typeof client.v4)[':name:findMatches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:findMatches'].$post(args, options))
}

export async function postV4NameGenerateAccountNumber(
  args: InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:generateAccountNumber'].$post(args, options))
}

export async function getV4NameGetGoogleUpdated(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:getGoogleUpdated'].$get(args, options))
}

export async function getV4NameGoogleUpdated(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:googleUpdated'].$get(args, options))
}

export async function getV4NameRecommendGoogleLocations(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:recommendGoogleLocations'].$get(args, options))
}

export async function postV4NameReport(
  args: InferRequestType<(typeof client.v4)[':name:report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:report'].$post(args, options))
}

export async function postV4NameTransfer(
  args: InferRequestType<(typeof client.v4)[':name:transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:transfer'].$post(args, options))
}

export async function postV4NameVerify(
  args: InferRequestType<(typeof client.v4)[':name:verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':name:verify'].$post(args, options))
}

export async function getV4ParentAdmins(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].admins.$get(args, options))
}

export async function postV4ParentAdmins(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].admins.$post(args, options))
}

export async function getV4ParentAnswers(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].answers.$get(args, options))
}

export async function deleteV4ParentAnswersDelete(
  args: InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent']['answers:delete'].$delete(args, options))
}

export async function postV4ParentAnswersUpsert(
  args: InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent']['answers:upsert'].$post(args, options))
}

export async function getV4ParentInsuranceNetworks(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].insuranceNetworks.$get(args, options))
}

export async function getV4ParentInvitations(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].invitations.$get(args, options))
}

export async function getV4ParentLocalPosts(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].localPosts.$get(args, options))
}

export async function postV4ParentLocalPosts(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].localPosts.$post(args, options))
}

export async function getV4ParentLocations(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].locations.$get(args, options))
}

export async function postV4ParentLocations(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].locations.$post(args, options))
}

export async function getV4ParentMedia(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].media.$get(args, options))
}

export async function postV4ParentMedia(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].media.$post(args, options))
}

export async function getV4ParentMediaCustomers(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].media.customers.$get(args, options))
}

export async function postV4ParentMediaStartUpload(
  args: InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent']['media:startUpload'].$post(args, options))
}

export async function getV4ParentQuestions(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].questions.$get(args, options))
}

export async function postV4ParentQuestions(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].questions.$post(args, options))
}

export async function getV4ParentReviews(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].reviews.$get(args, options))
}

export async function getV4ParentVerifications(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4[':parent'].verifications.$get(args, options))
}
