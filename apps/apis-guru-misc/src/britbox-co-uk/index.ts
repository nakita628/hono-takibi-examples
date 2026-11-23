import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountBillingMethodsIdRoute,
  deleteAccountBillingSubscriptionsIdRoute,
  deleteAccountDevicesIdRoute,
  deleteAccountProfileBookmarksItemIdRoute,
  deleteAccountProfilesIdRoute,
  deleteAccountProfileWatchedRoute,
  deleteAuthorizationRoute,
  deleteItvPurchasePlatformRoute,
  getAccountBillingMethodsIdRoute,
  getAccountBillingMethodsRoute,
  getAccountBillingPurchasesRoute,
  getAccountDevicesIdRoute,
  getAccountDevicesRoute,
  getAccountEntitlementsRoute,
  getAccountItemsIdVideosGuardedRoute,
  getAccountItemsIdVideosRoute,
  getAccountNonceRoute,
  getAccountProfileBookmarksItemIdRoute,
  getAccountProfileBookmarksListRoute,
  getAccountProfileBookmarksRoute,
  getAccountProfileContinueWatchingListRoute,
  getAccountProfileItemsItemIdNextRoute,
  getAccountProfileRatingsItemIdRoute,
  getAccountProfileRatingsListRoute,
  getAccountProfileRatingsRoute,
  getAccountProfileRoute,
  getAccountProfilesIdRoute,
  getAccountProfileWatchedItemIdRoute,
  getAccountProfileWatchedListRoute,
  getAccountProfileWatchedRoute,
  getAccountRoute,
  getBtPlansRoute,
  getBtPlanTokenRoute,
  getBtTokenValidateRoute,
  getCheckSubscriptionIdRoute,
  getConfigRoute,
  getEeBtEligibilityRoute,
  getEePlansIdRoute,
  getEePlansRoute,
  getEeTokenCreateRoute,
  getItemsIdChildrenRoute,
  getItemsIdRelatedRoute,
  getItemsIdRoute,
  getItemsIdVideosRoute,
  getItemsItemIdNextRoute,
  getItvEntitlementsCurrentRoute,
  getItvEntitlementsHistoryRoute,
  getItvFeatureFlagFeatureRoute,
  getItvHadEntitlementsRoute,
  getItvItemsummaryExternalIdRoute,
  getItvPageRoute,
  getItvPlansPlatformRoute,
  getItvProfileRecommendationListRoute,
  getItvProfileRoute,
  getItvPurchasePlatformRoute,
  getItvRokuPlansRoute,
  getItvSaveOfferRoute,
  getItvSubscriptionFullpricerenewalRoute,
  getItvSubscriptionstateRoute,
  getItvSubscriptionStatusPlatformRoute,
  getItvUpcominginvoiceRoute,
  getItvVoucherPlanIdVoucherIdRoute,
  getListsIdRoute,
  getListsRoute,
  getPageRoute,
  getPlansIdRoute,
  getSamsungPreviewRoute,
  getSchedulesRoute,
  getSearchRoute,
  patchAccountProfilesIdRoute,
  patchAccountRoute,
  postAccountBillingMethodsRoute,
  postAccountBillingPurchasesRoute,
  postAccountDevicesAuthorizationRoute,
  postAccountDevicesRoute,
  postAccountProfilesRoute,
  postAccountRequestEmailVerificationRoute,
  postAuthorizationDeviceCodeRoute,
  postAuthorizationDeviceRoute,
  postAuthorizationProfileRoute,
  postAuthorizationRefreshRoute,
  postAuthorizationRoute,
  postAuthorizationSsoRoute,
  postBtTokenAssignRoute,
  postEeMsisdnRoute,
  postEeOffersRoute,
  postEePinRoute,
  postItvBillinghistoryPlatformRoute,
  postItvCardsPlatformRoute,
  postItvChangeemailRoute,
  postItvChangemarketingRoute,
  postItvDeleteaccountRoute,
  postItvGooglepaySubscriptionRoute,
  postItvItemsClipsRoute,
  postItvItemsDownloadableRoute,
  postItvPinauthorizationRoute,
  postItvPlanPlatformRoute,
  postItvProfiletokenRoute,
  postItvPurchasePlatformRoute,
  postItvPurchasePlatformStrongRoute,
  postItvPurchasePlatformWithofferRoute,
  postItvResubscribePlatformRoute,
  postItvRokuTransactionTransactionidRoute,
  postItvSaveOfferRoute,
  postItvVoucherPlatformRoute,
  postRegisterRoute,
  postRequestPasswordResetRoute,
  postResetPasswordRoute,
  postVerifyEmailRoute,
  putAccountBillingSubscriptionsIdRoute,
  putAccountDevicesIdNameRoute,
  putAccountPasswordRoute,
  putAccountPinRoute,
  putAccountProfileBookmarksItemIdRoute,
  putAccountProfileRatingsItemIdRoute,
  putAccountProfileWatchedItemIdRoute,
  putEePinRoute,
  putItvCardsPlatformRoute,
  putItvProfileRoute,
  putItvUpdateIntentStrongPlatformRoute,
  putItvUpdatePaymentStrongPlatformRoute,
} from './routes'
import {
  deleteAccountBillingMethodsIdRouteHandler,
  deleteAccountBillingSubscriptionsIdRouteHandler,
  deleteAccountDevicesIdRouteHandler,
  deleteAccountProfileBookmarksItemIdRouteHandler,
  deleteAccountProfilesIdRouteHandler,
  deleteAccountProfileWatchedRouteHandler,
  deleteAuthorizationRouteHandler,
  deleteItvPurchasePlatformRouteHandler,
  getAccountBillingMethodsIdRouteHandler,
  getAccountBillingMethodsRouteHandler,
  getAccountBillingPurchasesRouteHandler,
  getAccountDevicesIdRouteHandler,
  getAccountDevicesRouteHandler,
  getAccountEntitlementsRouteHandler,
  getAccountItemsIdVideosGuardedRouteHandler,
  getAccountItemsIdVideosRouteHandler,
  getAccountNonceRouteHandler,
  getAccountProfileBookmarksItemIdRouteHandler,
  getAccountProfileBookmarksListRouteHandler,
  getAccountProfileBookmarksRouteHandler,
  getAccountProfileContinueWatchingListRouteHandler,
  getAccountProfileItemsItemIdNextRouteHandler,
  getAccountProfileRatingsItemIdRouteHandler,
  getAccountProfileRatingsListRouteHandler,
  getAccountProfileRatingsRouteHandler,
  getAccountProfileRouteHandler,
  getAccountProfilesIdRouteHandler,
  getAccountProfileWatchedItemIdRouteHandler,
  getAccountProfileWatchedListRouteHandler,
  getAccountProfileWatchedRouteHandler,
  getAccountRouteHandler,
  getBtPlansRouteHandler,
  getBtPlanTokenRouteHandler,
  getBtTokenValidateRouteHandler,
  getCheckSubscriptionIdRouteHandler,
  getConfigRouteHandler,
  getEeBtEligibilityRouteHandler,
  getEePlansIdRouteHandler,
  getEePlansRouteHandler,
  getEeTokenCreateRouteHandler,
  getItemsIdChildrenRouteHandler,
  getItemsIdRelatedRouteHandler,
  getItemsIdRouteHandler,
  getItemsIdVideosRouteHandler,
  getItemsItemIdNextRouteHandler,
  getItvEntitlementsCurrentRouteHandler,
  getItvEntitlementsHistoryRouteHandler,
  getItvFeatureFlagFeatureRouteHandler,
  getItvHadEntitlementsRouteHandler,
  getItvItemsummaryExternalIdRouteHandler,
  getItvPageRouteHandler,
  getItvPlansPlatformRouteHandler,
  getItvProfileRecommendationListRouteHandler,
  getItvProfileRouteHandler,
  getItvPurchasePlatformRouteHandler,
  getItvRokuPlansRouteHandler,
  getItvSaveOfferRouteHandler,
  getItvSubscriptionFullpricerenewalRouteHandler,
  getItvSubscriptionstateRouteHandler,
  getItvSubscriptionStatusPlatformRouteHandler,
  getItvUpcominginvoiceRouteHandler,
  getItvVoucherPlanIdVoucherIdRouteHandler,
  getListsIdRouteHandler,
  getListsRouteHandler,
  getPageRouteHandler,
  getPlansIdRouteHandler,
  getSamsungPreviewRouteHandler,
  getSchedulesRouteHandler,
  getSearchRouteHandler,
  patchAccountProfilesIdRouteHandler,
  patchAccountRouteHandler,
  postAccountBillingMethodsRouteHandler,
  postAccountBillingPurchasesRouteHandler,
  postAccountDevicesAuthorizationRouteHandler,
  postAccountDevicesRouteHandler,
  postAccountProfilesRouteHandler,
  postAccountRequestEmailVerificationRouteHandler,
  postAuthorizationDeviceCodeRouteHandler,
  postAuthorizationDeviceRouteHandler,
  postAuthorizationProfileRouteHandler,
  postAuthorizationRefreshRouteHandler,
  postAuthorizationRouteHandler,
  postAuthorizationSsoRouteHandler,
  postBtTokenAssignRouteHandler,
  postEeMsisdnRouteHandler,
  postEeOffersRouteHandler,
  postEePinRouteHandler,
  postItvBillinghistoryPlatformRouteHandler,
  postItvCardsPlatformRouteHandler,
  postItvChangeemailRouteHandler,
  postItvChangemarketingRouteHandler,
  postItvDeleteaccountRouteHandler,
  postItvGooglepaySubscriptionRouteHandler,
  postItvItemsClipsRouteHandler,
  postItvItemsDownloadableRouteHandler,
  postItvPinauthorizationRouteHandler,
  postItvPlanPlatformRouteHandler,
  postItvProfiletokenRouteHandler,
  postItvPurchasePlatformRouteHandler,
  postItvPurchasePlatformStrongRouteHandler,
  postItvPurchasePlatformWithofferRouteHandler,
  postItvResubscribePlatformRouteHandler,
  postItvRokuTransactionTransactionidRouteHandler,
  postItvSaveOfferRouteHandler,
  postItvVoucherPlatformRouteHandler,
  postRegisterRouteHandler,
  postRequestPasswordResetRouteHandler,
  postResetPasswordRouteHandler,
  postVerifyEmailRouteHandler,
  putAccountBillingSubscriptionsIdRouteHandler,
  putAccountDevicesIdNameRouteHandler,
  putAccountPasswordRouteHandler,
  putAccountPinRouteHandler,
  putAccountProfileBookmarksItemIdRouteHandler,
  putAccountProfileRatingsItemIdRouteHandler,
  putAccountProfileWatchedItemIdRouteHandler,
  putEePinRouteHandler,
  putItvCardsPlatformRouteHandler,
  putItvProfileRouteHandler,
  putItvUpdateIntentStrongPlatformRouteHandler,
  putItvUpdatePaymentStrongPlatformRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(patchAccountRoute, patchAccountRouteHandler)
  .openapi(getAccountBillingMethodsRoute, getAccountBillingMethodsRouteHandler)
  .openapi(postAccountBillingMethodsRoute, postAccountBillingMethodsRouteHandler)
  .openapi(deleteAccountBillingMethodsIdRoute, deleteAccountBillingMethodsIdRouteHandler)
  .openapi(getAccountBillingMethodsIdRoute, getAccountBillingMethodsIdRouteHandler)
  .openapi(getAccountBillingPurchasesRoute, getAccountBillingPurchasesRouteHandler)
  .openapi(postAccountBillingPurchasesRoute, postAccountBillingPurchasesRouteHandler)
  .openapi(
    deleteAccountBillingSubscriptionsIdRoute,
    deleteAccountBillingSubscriptionsIdRouteHandler,
  )
  .openapi(putAccountBillingSubscriptionsIdRoute, putAccountBillingSubscriptionsIdRouteHandler)
  .openapi(getAccountDevicesRoute, getAccountDevicesRouteHandler)
  .openapi(postAccountDevicesRoute, postAccountDevicesRouteHandler)
  .openapi(postAccountDevicesAuthorizationRoute, postAccountDevicesAuthorizationRouteHandler)
  .openapi(deleteAccountDevicesIdRoute, deleteAccountDevicesIdRouteHandler)
  .openapi(getAccountDevicesIdRoute, getAccountDevicesIdRouteHandler)
  .openapi(putAccountDevicesIdNameRoute, putAccountDevicesIdNameRouteHandler)
  .openapi(getAccountEntitlementsRoute, getAccountEntitlementsRouteHandler)
  .openapi(getAccountItemsIdVideosRoute, getAccountItemsIdVideosRouteHandler)
  .openapi(getAccountItemsIdVideosGuardedRoute, getAccountItemsIdVideosGuardedRouteHandler)
  .openapi(getAccountNonceRoute, getAccountNonceRouteHandler)
  .openapi(putAccountPasswordRoute, putAccountPasswordRouteHandler)
  .openapi(putAccountPinRoute, putAccountPinRouteHandler)
  .openapi(getAccountProfileRoute, getAccountProfileRouteHandler)
  .openapi(getAccountProfileBookmarksRoute, getAccountProfileBookmarksRouteHandler)
  .openapi(getAccountProfileBookmarksListRoute, getAccountProfileBookmarksListRouteHandler)
  .openapi(
    deleteAccountProfileBookmarksItemIdRoute,
    deleteAccountProfileBookmarksItemIdRouteHandler,
  )
  .openapi(getAccountProfileBookmarksItemIdRoute, getAccountProfileBookmarksItemIdRouteHandler)
  .openapi(putAccountProfileBookmarksItemIdRoute, putAccountProfileBookmarksItemIdRouteHandler)
  .openapi(
    getAccountProfileContinueWatchingListRoute,
    getAccountProfileContinueWatchingListRouteHandler,
  )
  .openapi(getAccountProfileItemsItemIdNextRoute, getAccountProfileItemsItemIdNextRouteHandler)
  .openapi(getAccountProfileRatingsRoute, getAccountProfileRatingsRouteHandler)
  .openapi(getAccountProfileRatingsListRoute, getAccountProfileRatingsListRouteHandler)
  .openapi(getAccountProfileRatingsItemIdRoute, getAccountProfileRatingsItemIdRouteHandler)
  .openapi(putAccountProfileRatingsItemIdRoute, putAccountProfileRatingsItemIdRouteHandler)
  .openapi(deleteAccountProfileWatchedRoute, deleteAccountProfileWatchedRouteHandler)
  .openapi(getAccountProfileWatchedRoute, getAccountProfileWatchedRouteHandler)
  .openapi(getAccountProfileWatchedListRoute, getAccountProfileWatchedListRouteHandler)
  .openapi(getAccountProfileWatchedItemIdRoute, getAccountProfileWatchedItemIdRouteHandler)
  .openapi(putAccountProfileWatchedItemIdRoute, putAccountProfileWatchedItemIdRouteHandler)
  .openapi(postAccountProfilesRoute, postAccountProfilesRouteHandler)
  .openapi(deleteAccountProfilesIdRoute, deleteAccountProfilesIdRouteHandler)
  .openapi(getAccountProfilesIdRoute, getAccountProfilesIdRouteHandler)
  .openapi(patchAccountProfilesIdRoute, patchAccountProfilesIdRouteHandler)
  .openapi(
    postAccountRequestEmailVerificationRoute,
    postAccountRequestEmailVerificationRouteHandler,
  )
  .openapi(deleteAuthorizationRoute, deleteAuthorizationRouteHandler)
  .openapi(postAuthorizationRoute, postAuthorizationRouteHandler)
  .openapi(postAuthorizationDeviceRoute, postAuthorizationDeviceRouteHandler)
  .openapi(postAuthorizationDeviceCodeRoute, postAuthorizationDeviceCodeRouteHandler)
  .openapi(postAuthorizationProfileRoute, postAuthorizationProfileRouteHandler)
  .openapi(postAuthorizationRefreshRoute, postAuthorizationRefreshRouteHandler)
  .openapi(postAuthorizationSsoRoute, postAuthorizationSsoRouteHandler)
  .openapi(getBtPlanTokenRoute, getBtPlanTokenRouteHandler)
  .openapi(getBtPlansRoute, getBtPlansRouteHandler)
  .openapi(postBtTokenAssignRoute, postBtTokenAssignRouteHandler)
  .openapi(getBtTokenValidateRoute, getBtTokenValidateRouteHandler)
  .openapi(getCheckSubscriptionIdRoute, getCheckSubscriptionIdRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getEeBtEligibilityRoute, getEeBtEligibilityRouteHandler)
  .openapi(postEeMsisdnRoute, postEeMsisdnRouteHandler)
  .openapi(postEeOffersRoute, postEeOffersRouteHandler)
  .openapi(postEePinRoute, postEePinRouteHandler)
  .openapi(putEePinRoute, putEePinRouteHandler)
  .openapi(getEePlansRoute, getEePlansRouteHandler)
  .openapi(getEePlansIdRoute, getEePlansIdRouteHandler)
  .openapi(getEeTokenCreateRoute, getEeTokenCreateRouteHandler)
  .openapi(getItemsIdRoute, getItemsIdRouteHandler)
  .openapi(getItemsIdChildrenRoute, getItemsIdChildrenRouteHandler)
  .openapi(getItemsIdRelatedRoute, getItemsIdRelatedRouteHandler)
  .openapi(getItemsIdVideosRoute, getItemsIdVideosRouteHandler)
  .openapi(getItemsItemIdNextRoute, getItemsItemIdNextRouteHandler)
  .openapi(postItvBillinghistoryPlatformRoute, postItvBillinghistoryPlatformRouteHandler)
  .openapi(postItvCardsPlatformRoute, postItvCardsPlatformRouteHandler)
  .openapi(putItvCardsPlatformRoute, putItvCardsPlatformRouteHandler)
  .openapi(postItvChangeemailRoute, postItvChangeemailRouteHandler)
  .openapi(postItvChangemarketingRoute, postItvChangemarketingRouteHandler)
  .openapi(postItvDeleteaccountRoute, postItvDeleteaccountRouteHandler)
  .openapi(getItvEntitlementsCurrentRoute, getItvEntitlementsCurrentRouteHandler)
  .openapi(getItvEntitlementsHistoryRoute, getItvEntitlementsHistoryRouteHandler)
  .openapi(getItvFeatureFlagFeatureRoute, getItvFeatureFlagFeatureRouteHandler)
  .openapi(postItvGooglepaySubscriptionRoute, postItvGooglepaySubscriptionRouteHandler)
  .openapi(getItvHadEntitlementsRoute, getItvHadEntitlementsRouteHandler)
  .openapi(postItvItemsClipsRoute, postItvItemsClipsRouteHandler)
  .openapi(postItvItemsDownloadableRoute, postItvItemsDownloadableRouteHandler)
  .openapi(getItvItemsummaryExternalIdRoute, getItvItemsummaryExternalIdRouteHandler)
  .openapi(getItvPageRoute, getItvPageRouteHandler)
  .openapi(postItvPinauthorizationRoute, postItvPinauthorizationRouteHandler)
  .openapi(postItvPlanPlatformRoute, postItvPlanPlatformRouteHandler)
  .openapi(getItvPlansPlatformRoute, getItvPlansPlatformRouteHandler)
  .openapi(getItvProfileRoute, getItvProfileRouteHandler)
  .openapi(putItvProfileRoute, putItvProfileRouteHandler)
  .openapi(getItvProfileRecommendationListRoute, getItvProfileRecommendationListRouteHandler)
  .openapi(postItvProfiletokenRoute, postItvProfiletokenRouteHandler)
  .openapi(deleteItvPurchasePlatformRoute, deleteItvPurchasePlatformRouteHandler)
  .openapi(getItvPurchasePlatformRoute, getItvPurchasePlatformRouteHandler)
  .openapi(postItvPurchasePlatformRoute, postItvPurchasePlatformRouteHandler)
  .openapi(postItvPurchasePlatformStrongRoute, postItvPurchasePlatformStrongRouteHandler)
  .openapi(postItvPurchasePlatformWithofferRoute, postItvPurchasePlatformWithofferRouteHandler)
  .openapi(postItvResubscribePlatformRoute, postItvResubscribePlatformRouteHandler)
  .openapi(getItvRokuPlansRoute, getItvRokuPlansRouteHandler)
  .openapi(
    postItvRokuTransactionTransactionidRoute,
    postItvRokuTransactionTransactionidRouteHandler,
  )
  .openapi(getItvSaveOfferRoute, getItvSaveOfferRouteHandler)
  .openapi(postItvSaveOfferRoute, postItvSaveOfferRouteHandler)
  .openapi(getItvSubscriptionFullpricerenewalRoute, getItvSubscriptionFullpricerenewalRouteHandler)
  .openapi(getItvSubscriptionStatusPlatformRoute, getItvSubscriptionStatusPlatformRouteHandler)
  .openapi(getItvSubscriptionstateRoute, getItvSubscriptionstateRouteHandler)
  .openapi(getItvUpcominginvoiceRoute, getItvUpcominginvoiceRouteHandler)
  .openapi(putItvUpdateIntentStrongPlatformRoute, putItvUpdateIntentStrongPlatformRouteHandler)
  .openapi(putItvUpdatePaymentStrongPlatformRoute, putItvUpdatePaymentStrongPlatformRouteHandler)
  .openapi(getItvVoucherPlanIdVoucherIdRoute, getItvVoucherPlanIdVoucherIdRouteHandler)
  .openapi(postItvVoucherPlatformRoute, postItvVoucherPlatformRouteHandler)
  .openapi(getListsRoute, getListsRouteHandler)
  .openapi(getListsIdRoute, getListsIdRouteHandler)
  .openapi(getPageRoute, getPageRouteHandler)
  .openapi(getPlansIdRoute, getPlansIdRouteHandler)
  .openapi(postRegisterRoute, postRegisterRouteHandler)
  .openapi(postRequestPasswordResetRoute, postRequestPasswordResetRouteHandler)
  .openapi(postResetPasswordRoute, postResetPasswordRouteHandler)
  .openapi(getSamsungPreviewRoute, getSamsungPreviewRouteHandler)
  .openapi(getSchedulesRoute, getSchedulesRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(postVerifyEmailRoute, postVerifyEmailRouteHandler)

export default app
