import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  deleteAndroidpublisherV3NameRoute,
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute,
  getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameReviewsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute,
  getAndroidpublisherV3NameRoute,
  getAndroidpublisherV3ParentUsersRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  patchAndroidpublisherV3NameRoute,
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute,
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute,
  postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsRoute,
  postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute,
  postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute,
  postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
  postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
  postAndroidpublisherV3NameRefundRoute,
  postAndroidpublisherV3ParentExternalTransactionsRoute,
  postAndroidpublisherV3ParentGrantsRoute,
  postAndroidpublisherV3ParentUsersRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
} from '../routes'

export const postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameInappproductsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameInappproductsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRouteHandler: RouteHandler<
  typeof putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameReviewsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidpublisherV3NameRouteHandler: RouteHandler<
  typeof deleteAndroidpublisherV3NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3NameRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAndroidpublisherV3NameRouteHandler: RouteHandler<
  typeof patchAndroidpublisherV3NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3NameRefundRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3NameRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ParentExternalTransactionsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ParentExternalTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ParentGrantsRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ParentGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidpublisherV3ParentUsersRouteHandler: RouteHandler<
  typeof getAndroidpublisherV3ParentUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidpublisherV3ParentUsersRouteHandler: RouteHandler<
  typeof postAndroidpublisherV3ParentUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
