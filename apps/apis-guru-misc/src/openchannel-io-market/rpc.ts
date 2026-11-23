import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function postApps(
  args: InferRequestType<typeof client.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$post(args, options))
}

export async function getAppsBySafeNameSafeName(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.bySafeName[':safeName'].$get(args, options))
}

export async function getAppsTextSearch(
  args: InferRequestType<typeof client.apps.textSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.textSearch.$get(args, options))
}

export async function getAppsVersions(
  args: InferRequestType<typeof client.apps.versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.versions.$get(args, options))
}

export async function getAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$get(args, options))
}

export async function deleteAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$delete(args, options))
}

export async function postAppsAppIdLive(
  args: InferRequestType<(typeof client.apps)[':appId']['live']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].live.$post(args, options))
}

export async function postAppsAppIdPublish(
  args: InferRequestType<(typeof client.apps)[':appId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].publish.$post(args, options))
}

export async function getAppsAppIdVersionsVersion(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].versions[':version'].$get(args, options))
}

export async function postAppsAppIdVersionsVersion(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].versions[':version'].$post(args, options))
}

export async function deleteAppsAppIdVersionsVersion(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].versions[':version'].$delete(args, options))
}

export async function patchAppsAppIdVersionsVersion(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].versions[':version'].$patch(args, options))
}

export async function postAppsAppIdVersionsVersionStatus(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].versions[':version'].status.$post(args, options))
}

export async function postCustomGatewayPaymentOwnershipId(
  args: InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-gateway'].payment[':ownershipId'].$post(args, options))
}

export async function postCustomGatewayRefundOwnershipId(
  args: InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-gateway'].refund[':ownershipId'].$post(args, options))
}

export async function getDeveloperAccounts(
  args: InferRequestType<typeof client.developerAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developerAccounts.$get(args, options))
}

export async function getDeveloperAccountsDeveloperAccountId(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developerAccounts[':developerAccountId'].$get(args, options))
}

export async function postDeveloperAccountsDeveloperAccountId(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developerAccounts[':developerAccountId'].$post(args, options))
}

export async function deleteDeveloperAccountsDeveloperAccountId(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developerAccounts[':developerAccountId'].$delete(args, options))
}

export async function patchDeveloperAccountsDeveloperAccountId(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developerAccounts[':developerAccountId'].$patch(args, options))
}

export async function getDevelopers(
  args: InferRequestType<typeof client.developers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers.$get(args, options))
}

export async function getDevelopersDeveloperId(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers[':developerId'].$get(args, options))
}

export async function postDevelopersDeveloperId(
  args: InferRequestType<(typeof client.developers)[':developerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers[':developerId'].$post(args, options))
}

export async function deleteDevelopersDeveloperId(
  args: InferRequestType<(typeof client.developers)[':developerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers[':developerId'].$delete(args, options))
}

export async function patchDevelopersDeveloperId(
  args: InferRequestType<(typeof client.developers)[':developerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers[':developerId'].$patch(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].$get(args, options))
}

export async function getFiles(
  args: InferRequestType<typeof client.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesByIdOrUrl(
  args: InferRequestType<typeof client.files.byIdOrUrl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.byIdOrUrl.$get(args, options))
}

export async function getFilesDownload(
  args: InferRequestType<typeof client.files.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.download.$get(args, options))
}

export async function postFilesUrl(
  args: InferRequestType<typeof client.files.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.url.$post(args, options))
}

export async function getMarketsThis(options?: ClientRequestOptions) {
  return await parseResponse(client.markets.this.$get(undefined, options))
}

export async function getOwnership(
  args: InferRequestType<typeof client.ownership.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership.$get(args, options))
}

export async function postOwnershipInstall(
  args: InferRequestType<typeof client.ownership.install.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership.install.$post(args, options))
}

export async function postOwnershipUninstallOwnershipId(
  args: InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership.uninstall[':ownershipId'].$post(args, options))
}

export async function getOwnershipOwnershipId(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership[':ownershipId'].$get(args, options))
}

export async function postOwnershipOwnershipId(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership[':ownershipId'].$post(args, options))
}

export async function patchOwnershipOwnershipId(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ownership[':ownershipId'].$patch(args, options))
}

export async function getPermissionAppsAppId(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permission.apps[':appId'].$get(args, options))
}

export async function postPermissionAppsAppId(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permission.apps[':appId'].$post(args, options))
}

export async function deletePermissionAppsAppId(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permission.apps[':appId'].$delete(args, options))
}

export async function getReviews(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.$get(args, options))
}

export async function postReviews(
  args: InferRequestType<typeof client.reviews.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.$post(args, options))
}

export async function getReviewsReviewId(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':reviewId'].$get(args, options))
}

export async function postReviewsReviewId(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':reviewId'].$post(args, options))
}

export async function deleteReviewsReviewId(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':reviewId'].$delete(args, options))
}

export async function patchReviewsReviewId(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':reviewId'].$patch(args, options))
}

export async function postStatsIncrementField(
  args: InferRequestType<(typeof client.stats.increment)[':field']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.increment[':field'].$post(args, options))
}

export async function getStatsSeriesPeriodFields(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.series[':period'][':fields'].$get(args, options))
}

export async function getStatsTotal(
  args: InferRequestType<typeof client.stats.total.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.total.$get(args, options))
}

export async function getStripeGatewayDeveloperDeveloperIdAccounts(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['stripe-gateway'].developer[':developerId'].accounts.$get(args, options),
  )
}

export async function postStripeGatewayDeveloperDeveloperIdAccounts(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['stripe-gateway'].developer[':developerId'].accounts.$post(args, options),
  )
}

export async function deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['stripe-gateway'].developer[':developerId'].accounts[':stripeId'].$delete(args, options),
  )
}

export async function getStripeGatewayUserUserIdCards(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stripe-gateway'].user[':userId'].cards.$get(args, options))
}

export async function postStripeGatewayUserUserIdCards(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stripe-gateway'].user[':userId'].cards.$post(args, options))
}

export async function postStripeGatewayUserUserIdCardsCardId(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['stripe-gateway'].user[':userId'].cards[':cardId'].$post(args, options),
  )
}

export async function deleteStripeGatewayUserUserIdCardsCardId(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['stripe-gateway'].user[':userId'].cards[':cardId'].$delete(args, options),
  )
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function getTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transactionId'].$get(args, options))
}

export async function postTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transactionId'].$post(args, options))
}

export async function deleteTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transactionId'].$delete(args, options))
}

export async function getUserAccounts(
  args: InferRequestType<typeof client.userAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userAccounts.$get(args, options))
}

export async function getUserAccountsUserAccountId(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userAccounts[':userAccountId'].$get(args, options))
}

export async function postUserAccountsUserAccountId(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userAccounts[':userAccountId'].$post(args, options))
}

export async function deleteUserAccountsUserAccountId(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userAccounts[':userAccountId'].$delete(args, options))
}

export async function patchUserAccountsUserAccountId(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userAccounts[':userAccountId'].$patch(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function postUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$post(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$patch(args, options))
}
