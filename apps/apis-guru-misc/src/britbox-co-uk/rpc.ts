import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(
  args: InferRequestType<typeof client.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$get(args, options))
}

export async function patchAccount(
  args: InferRequestType<typeof client.account.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$patch(args, options))
}

export async function getAccountBillingMethods(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.methods.$get(args, options))
}

export async function postAccountBillingMethods(
  args: InferRequestType<typeof client.account.billing.methods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.methods.$post(args, options))
}

export async function getAccountBillingMethodsId(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.methods[':id'].$get(args, options))
}

export async function deleteAccountBillingMethodsId(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.methods[':id'].$delete(args, options))
}

export async function getAccountBillingPurchases(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.purchases.$get(args, options))
}

export async function postAccountBillingPurchases(
  args: InferRequestType<typeof client.account.billing.purchases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.purchases.$post(args, options))
}

export async function putAccountBillingSubscriptionsId(
  args: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.subscriptions[':id'].$put(args, options))
}

export async function deleteAccountBillingSubscriptionsId(
  args: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.billing.subscriptions[':id'].$delete(args, options))
}

export async function getAccountDevices(
  args: InferRequestType<typeof client.account.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices.$get(args, options))
}

export async function postAccountDevices(
  args: InferRequestType<typeof client.account.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices.$post(args, options))
}

export async function postAccountDevicesAuthorization(
  args: InferRequestType<typeof client.account.devices.authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices.authorization.$post(args, options))
}

export async function getAccountDevicesId(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices[':id'].$get(args, options))
}

export async function deleteAccountDevicesId(
  args: InferRequestType<(typeof client.account.devices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices[':id'].$delete(args, options))
}

export async function putAccountDevicesIdName(
  args: InferRequestType<(typeof client.account.devices)[':id']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.devices[':id'].name.$put(args, options))
}

export async function getAccountEntitlements(
  args: InferRequestType<typeof client.account.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.entitlements.$get(args, options))
}

export async function getAccountItemsIdVideos(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.items[':id'].videos.$get(args, options))
}

export async function getAccountItemsIdVideosGuarded(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.items[':id']['videos-guarded'].$get(args, options))
}

export async function getAccountNonce(
  args: InferRequestType<typeof client.account.nonce.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.nonce.$get(args, options))
}

export async function putAccountPassword(
  args: InferRequestType<typeof client.account.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.password.$put(args, options))
}

export async function putAccountPin(
  args: InferRequestType<typeof client.account.pin.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.pin.$put(args, options))
}

export async function getAccountProfile(
  args: InferRequestType<typeof client.account.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.$get(args, options))
}

export async function getAccountProfileBookmarks(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.bookmarks.$get(args, options))
}

export async function getAccountProfileBookmarksList(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.bookmarks.list.$get(args, options))
}

export async function getAccountProfileBookmarksItemId(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.bookmarks[':itemId'].$get(args, options))
}

export async function putAccountProfileBookmarksItemId(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.bookmarks[':itemId'].$put(args, options))
}

export async function deleteAccountProfileBookmarksItemId(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.bookmarks[':itemId'].$delete(args, options))
}

export async function getAccountProfileContinueWatchingList(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile['continue-watching'].list.$get(args, options))
}

export async function getAccountProfileItemsItemIdNext(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.items[':itemId'].next.$get(args, options))
}

export async function getAccountProfileRatings(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.ratings.$get(args, options))
}

export async function getAccountProfileRatingsList(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.ratings.list.$get(args, options))
}

export async function getAccountProfileRatingsItemId(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.ratings[':itemId'].$get(args, options))
}

export async function putAccountProfileRatingsItemId(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.ratings[':itemId'].$put(args, options))
}

export async function getAccountProfileWatched(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.watched.$get(args, options))
}

export async function deleteAccountProfileWatched(
  args: InferRequestType<typeof client.account.profile.watched.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.watched.$delete(args, options))
}

export async function getAccountProfileWatchedList(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.watched.list.$get(args, options))
}

export async function getAccountProfileWatchedItemId(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.watched[':itemId'].$get(args, options))
}

export async function putAccountProfileWatchedItemId(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profile.watched[':itemId'].$put(args, options))
}

export async function postAccountProfiles(
  args: InferRequestType<typeof client.account.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profiles.$post(args, options))
}

export async function getAccountProfilesId(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profiles[':id'].$get(args, options))
}

export async function deleteAccountProfilesId(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profiles[':id'].$delete(args, options))
}

export async function patchAccountProfilesId(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.profiles[':id'].$patch(args, options))
}

export async function postAccountRequestEmailVerification(
  args: InferRequestType<(typeof client.account)['request-email-verification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['request-email-verification'].$post(args, options))
}

export async function postAuthorization(
  args: InferRequestType<typeof client.authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.$post(args, options))
}

export async function deleteAuthorization(
  args: InferRequestType<typeof client.authorization.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.$delete(args, options))
}

export async function postAuthorizationDevice(
  args: InferRequestType<typeof client.authorization.device.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.device.$post(args, options))
}

export async function postAuthorizationDeviceCode(
  args: InferRequestType<typeof client.authorization.device.code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.device.code.$post(args, options))
}

export async function postAuthorizationProfile(
  args: InferRequestType<typeof client.authorization.profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.profile.$post(args, options))
}

export async function postAuthorizationRefresh(
  args: InferRequestType<typeof client.authorization.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.refresh.$post(args, options))
}

export async function postAuthorizationSso(
  args: InferRequestType<typeof client.authorization.sso.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.sso.$post(args, options))
}

export async function getBtPlanToken(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bt.plan[':token'].$get(args, options))
}

export async function getBtPlans(
  args: InferRequestType<typeof client.bt.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bt.plans.$get(args, options))
}

export async function postBtTokenAssign(
  args: InferRequestType<typeof client.bt.token.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bt.token.assign.$post(args, options))
}

export async function getBtTokenValidate(
  args: InferRequestType<typeof client.bt.token.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bt.token.validate.$get(args, options))
}

export async function getCheckSubscriptionId(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['check-subscription'][':id'].$get(args, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function getEeBtEligibility(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ee-bt'].eligibility.$get(args, options))
}

export async function postEeMsisdn(
  args: InferRequestType<typeof client.ee.msisdn.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.msisdn.$post(args, options))
}

export async function postEeOffers(
  args: InferRequestType<typeof client.ee.offers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.offers.$post(args, options))
}

export async function putEePin(
  args: InferRequestType<typeof client.ee.pin.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.pin.$put(args, options))
}

export async function postEePin(
  args: InferRequestType<typeof client.ee.pin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.pin.$post(args, options))
}

export async function getEePlans(
  args: InferRequestType<typeof client.ee.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.plans.$get(args, options))
}

export async function getEePlansId(
  args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ee.plans[':id'].$get(args, options))
}

export async function getEeTokenCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.ee.token.create.$get(undefined, options))
}

export async function getItemsId(
  args: InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].$get(args, options))
}

export async function getItemsIdChildren(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].children.$get(args, options))
}

export async function getItemsIdRelated(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].related.$get(args, options))
}

export async function getItemsIdVideos(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].videos.$get(args, options))
}

export async function getItemsItemIdNext(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':itemId'].next.$get(args, options))
}

export async function postItvBillinghistoryPlatform(
  args: InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.billinghistory[':platform'].$post(args, options))
}

export async function putItvCardsPlatform(
  args: InferRequestType<(typeof client.itv.cards)[':platform']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.cards[':platform'].$put(args, options))
}

export async function postItvCardsPlatform(
  args: InferRequestType<(typeof client.itv.cards)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.cards[':platform'].$post(args, options))
}

export async function postItvChangeemail(
  args: InferRequestType<typeof client.itv.changeemail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.changeemail.$post(args, options))
}

export async function postItvChangemarketing(
  args: InferRequestType<typeof client.itv.changemarketing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.changemarketing.$post(args, options))
}

export async function postItvDeleteaccount(
  args: InferRequestType<typeof client.itv.deleteaccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.deleteaccount.$post(args, options))
}

export async function getItvEntitlementsCurrent(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.entitlements.current.$get(args, options))
}

export async function getItvEntitlementsHistory(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.entitlements.history.$get(args, options))
}

export async function getItvFeatureFlagFeature(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.featureFlag[':feature'].$get(args, options))
}

export async function postItvGooglepaySubscription(
  args: InferRequestType<typeof client.itv.googlepay.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.googlepay.subscription.$post(args, options))
}

export async function getItvHadEntitlements(
  args: InferRequestType<typeof client.itv.had.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.had.entitlements.$get(args, options))
}

export async function postItvItemsClips(
  args: InferRequestType<typeof client.itv.items.clips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.items.clips.$post(args, options))
}

export async function postItvItemsDownloadable(
  args: InferRequestType<typeof client.itv.items.downloadable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.items.downloadable.$post(args, options))
}

export async function getItvItemsummaryExternalId(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.itemsummary[':externalId'].$get(args, options))
}

export async function getItvPage(
  args: InferRequestType<typeof client.itv.page.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.page.$get(args, options))
}

export async function postItvPinauthorization(
  args: InferRequestType<typeof client.itv.pinauthorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.pinauthorization.$post(args, options))
}

export async function postItvPlanPlatform(
  args: InferRequestType<(typeof client.itv.plan)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.plan[':platform'].$post(args, options))
}

export async function getItvPlansPlatform(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.plans[':platform'].$get(args, options))
}

export async function getItvProfile(
  args: InferRequestType<typeof client.itv.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.profile.$get(args, options))
}

export async function putItvProfile(
  args: InferRequestType<typeof client.itv.profile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.profile.$put(args, options))
}

export async function getItvProfileRecommendationList(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.profile.recommendation.list.$get(args, options))
}

export async function postItvProfiletoken(
  args: InferRequestType<typeof client.itv.profiletoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.profiletoken.$post(args, options))
}

export async function getItvPurchasePlatform(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.purchase[':platform'].$get(args, options))
}

export async function postItvPurchasePlatform(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.purchase[':platform'].$post(args, options))
}

export async function deleteItvPurchasePlatform(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.purchase[':platform'].$delete(args, options))
}

export async function postItvPurchasePlatformStrong(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.purchase[':platform'].strong.$post(args, options))
}

export async function postItvPurchasePlatformWithoffer(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.purchase[':platform'].withoffer.$post(args, options))
}

export async function postItvResubscribePlatform(
  args: InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.resubscribe[':platform'].$post(args, options))
}

export async function getItvRokuPlans(
  args: InferRequestType<typeof client.itv.roku.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.roku.plans.$get(args, options))
}

export async function postItvRokuTransactionTransactionid(
  args: InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.roku.transaction[':transactionid'].$post(args, options))
}

export async function getItvSaveOffer(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv['save-offer'].$get(args, options))
}

export async function postItvSaveOffer(
  args: InferRequestType<(typeof client.itv)['save-offer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv['save-offer'].$post(args, options))
}

export async function getItvSubscriptionFullpricerenewal(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.subscription.fullpricerenewal.$get(args, options))
}

export async function getItvSubscriptionStatusPlatform(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.subscription.status[':platform'].$get(args, options))
}

export async function getItvSubscriptionstate(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.subscriptionstate.$get(args, options))
}

export async function getItvUpcominginvoice(
  args: InferRequestType<typeof client.itv.upcominginvoice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.upcominginvoice.$get(args, options))
}

export async function putItvUpdateIntentStrongPlatform(
  args: InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.updateIntent.strong[':platform'].$put(args, options))
}

export async function putItvUpdatePaymentStrongPlatform(
  args: InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.updatePayment.strong[':platform'].$put(args, options))
}

export async function getItvVoucherPlanIdVoucherId(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.voucher[':planId'][':voucherId'].$get(args, options))
}

export async function postItvVoucherPlatform(
  args: InferRequestType<(typeof client.itv.voucher)[':platform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.itv.voucher[':platform'].$post(args, options))
}

export async function getLists(
  args: InferRequestType<typeof client.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$get(args, options))
}

export async function getListsId(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].$get(args, options))
}

export async function getPage(
  args: InferRequestType<typeof client.page.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.page.$get(args, options))
}

export async function getPlansId(
  args: InferRequestType<(typeof client.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':id'].$get(args, options))
}

export async function postRegister(
  args: InferRequestType<typeof client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.register.$post(args, options))
}

export async function postRequestPasswordReset(
  args: InferRequestType<(typeof client)['request-password-reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['request-password-reset'].$post(args, options))
}

export async function postResetPassword(
  args: InferRequestType<(typeof client)['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reset-password'].$post(args, options))
}

export async function getSamsungPreview(options?: ClientRequestOptions) {
  return await parseResponse(client['samsung-preview'].$get(undefined, options))
}

export async function getSchedules(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function postVerifyEmail(
  args: InferRequestType<(typeof client)['verify-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['verify-email'].$post(args, options))
}
